

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { getAvailableOrders } from '@/mockApi'
  
  const orders = ref([])
  const searchTerm = ref('')
  const sortBy = ref('time-desc')
  
  const filteredOrders = computed(() => {
    let result = orders.value.filter(order => 
      order.description.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  
    switch (sortBy.value) {
      case 'price-asc':
        return result.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return result.sort((a, b) => b.price - a.price)
      case 'time-asc':
        return result.sort((a, b) => a.timestamp - b.timestamp)
      case 'time-desc':
        return result.sort((a, b) => b.timestamp - a.timestamp)
      default:
        return result
    }
  })
  
  onMounted(async () => {
    try {
      orders.value = await getAvailableOrders()
    } catch (error) {
      console.error('Failed to fetch orders:', error)
    }
  })
  
  const grabOrder = (order) => {
    if (!order.grabbed) {
      order.grabbed = true
      // Here you would typically send a request to your backend to mark the order as grabbed
      alert(`You have grabbed: ${order.description}`)
    }
  }
  
  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }
  </script>





<template>
    <div class="order-grabbing-system">
      <h1>Available Orders</h1>
      <div class="filters">
        <input v-model="searchTerm" placeholder="Search orders..." class="search-input" />
        <select v-model="sortBy" class="sort-select">
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="time-asc">Time: Oldest First</option>
          <option value="time-desc">Time: Newest First</option>
        </select>
      </div>
      <div class="orders-container">
        <div v-if="filteredOrders.length > 0" v-for="order in filteredOrders" :key="order.id" class="order-item">
          <div class="order-info">
            <img :src="order.image" :alt="order.alt">
            <h3>{{ order.description }}</h3>
            <p class="order-price">${{ order.price.toFixed(2) }}</p>
            <p class="order-time">Posted: {{ formatTime(order.created_at) }}</p>
          </div>
          <button @click="grabOrder(order)" class="grab-button" :disabled="order.grabbed">
            {{ order.grabbed ? 'Grabbed' : 'Grab' }}
          </button>
        </div>
        <p v-else class="no-orders">No available orders at the moment.</p>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  .order-grabbing-system {
    padding: 2rem;
    background-color: #b1b4b3;
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
    transition: transform 0.3s ease;
  }
  
  .order-item:hover {
    transform: translateY(-5px);
  }
  
  .order-info h3 {
    margin: 0 0 0.5rem 0;
    color: #333;
  }
  
  .order-info img{
height: inherit;
width: 250px;

  }

  .order-price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #4267e0;
  }
  
  .order-time {
    font-size: 0.9rem;
    color: #777;
  }
  
  .grab-button {
    width: 100%;
    padding: 0.5rem;
    margin-top: 1rem;
    background-color: #1d4ff1;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .grab-button:hover:not(:disabled) {
    background-color: #5c7cfa;
  }
  
  .grab-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
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