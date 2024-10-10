<template>
    <div class="grabbed-orders">
      <h1>Your Grabbed Orders</h1>
      <div class="filters">
        <input v-model="searchTerm" placeholder="Search grabbed orders..." class="search-input" />
        <select v-model="sortBy" class="sort-select">
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="time-asc">Grabbed: Oldest First</option>
          <option value="time-desc">Grabbed: Newest First</option>
        </select>
      </div>
      <div class="orders-container">
        <div v-if="filteredOrders.length > 0" v-for="order in filteredOrders" :key="order.id" class="order-item">
          <div class="order-info">
            <img :src="order.image" :alt="order.alt">
            <h3>{{ order.description }}</h3>
            <p class="order-price">${{ order.price.toFixed(2) }}</p>
            <p class="order-time">Grabbed: {{ formatTime(order.grabbedAt) }}</p>
            <p class="order-expiry">Expires: {{ formatTime(order.expirationTime) }}</p>
          </div>
          <div class="order-status" :class="{ 'expired': isExpired(order) }">
            {{ isExpired(order) ? 'Expired' : 'Active' }}
          </div>
        </div>
        <p v-else class="no-orders">You haven't grabbed any orders yet.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { getUserOrders } from '@/mockApi'
  import { useUserStore } from '@/store/user'
  
  const userStore = useUserStore()
  const grabbedOrders = ref([])
  const searchTerm = ref('')
  const sortBy = ref('time-desc')
  
  const filteredOrders = computed(() => {
    let result = grabbedOrders.value.filter(order => 
      order.description.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  
    switch (sortBy.value) {
      case 'price-asc':
        return result.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return result.sort((a, b) => b.price - a.price)
      case 'time-asc':
        return result.sort((a, b) => a.grabbedAt - b.grabbedAt)
      case 'time-desc':
        return result.sort((a, b) => b.grabbedAt - a.grabbedAt)
      default:
        return result
    }
  })
  
  onMounted(async () => {
    try {
      grabbedOrders.value = await getUserOrders(userStore.user.id)
    } catch (error) {
      console.error('Failed to fetch grabbed orders:', error)
    }
  })
  
  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }
  
  const isExpired = (order) => {
    return new Date() > new Date(order.expirationTime)
  }
  </script>
  
  <style scoped>
  .grabbed-orders {
    padding: 2rem;
    background-color: #f4f7f6;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  h1 {
    color: #333;
    margin-bottom: 1rem;
  }
  
  .filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .search-input, .sort-select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .search-input {
    flex-grow: 1;
  }
  
  .orders-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .order-item {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: relative;
  }
  
  .order-info h3 {
    margin: 0 0 0.5rem 0;
    color: #333;
  }

  .order-info img{
    width: 250px;
  }
  
  .order-price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #6e8efb;
  }
  
  .order-time, .order-expiry {
    font-size: 0.9rem;
    color: #777;
  }
  
  .order-status {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    background-color: #4caf50;
    color: white;
  }
  
  .order-status.expired {
    background-color: #f44336;
  }
  
  .no-orders {
    grid-column: 1 / -1;
    text-align: center;
    color: #777;
  }
  
  @media (max-width: 768px) {
    .filters {
      flex-direction: column;
    }
    
    .orders-container {
      grid-template-columns: 1fr;
    }
  }
  </style>