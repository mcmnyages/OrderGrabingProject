<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <div class="dashboard">
      <aside :class="['sidebar', { collapsed: isCollapsed }]">
        <div class="sidebar-header">
          <h2 v-if="!isCollapsed">Amazonsz</h2>
          <button @click="toggleCollapse" class="collapse-button">
            <i :class="isCollapsed ? 'fa fa-angle-right' : 'fa fa-angle-left'"></i>
          </button>
        </div>
        <nav class="nav-links">
          <router-link v-for="link in navLinks" :key="link.to" :to="link.to" class="sidebar-link" :class="{ 'only-icon': isCollapsed }">
            <i :class="link.icon " class="w3-large" ></i>
            <span v-if="!isCollapsed">{{ link.text }}</span>
          </router-link>
        </nav>
      </aside>
  
      <div class="main-content">
        <header>
          <h1 class="welcome">Welcome, {{ user?.username }}</h1>
        </header>
    
        <main>
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </main>
    
        <footer>
          <p>&copy; {{ currentYear }} Amazonsz E-commerce</p>
        </footer>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import { useUserStore } from '@/store/user';
  
  const userStore = useUserStore();
  const user = computed(() => userStore.user);
  
  const navLinks = ref([
    { to: '/dashboard/orders', text: 'Order Grabbing', icon: 'fa fa-shopping-cart' },
    { to: '/dashboard/grabbed-orders', text: 'Grabbed Orders', icon: 'fa fa-cube' },
    { to: '/dashboard/wallet', text: 'Wallet', icon: '	fa fa-credit-card' },
    { to: '/dashboard/settings', text: 'Settings', icon: 'fa fa-cogs' },
    { to: '/dashboard/account', text: 'My Account', icon: 'fa fa-user' },
  ]);
  
  const currentYear = computed(() => new Date().getFullYear());
  const isCollapsed = ref(false);
  
  const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    min-height: 100vh;
    background-color: #4a685e;
    font-family: 'Roboto', sans-serif;
  }
  
  .sidebar {
    width: 250px;
    transition: width 0.3s;
    background-color: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  
  .sidebar.collapsed {
    width: 80px;
  }
  
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
  }
  
  .sidebar-header h2 {
    margin: 0;
    font-size: 1.5rem;
    transition: opacity 0.3s;
  }
  
  .sidebar-header .collapse-button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    transition: transform 0.3s;
  }
  
  .nav-links {
    width: 100%;
  }
  
  .sidebar-link {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    transition: background 0.3s, padding 0.3s;
  }
  
  .sidebar-link.only-icon {
    justify-content: center;
  }
  
  .sidebar-link:hover {
    background-color: #444;
    border-radius: 5px;
  }
  
  .sidebar-link i {
    font-size: 1.2rem;
  }
  
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  header {
    background-color: #979fa7;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  header h1 {
    color: #333;
  }
  
  main {
    flex: 1;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  
  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  