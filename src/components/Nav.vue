<script setup>
import { RouterLink } from 'vue-router';


const navLinks = [
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' },
  { to: '/help', text: 'Help' },
  { to: '/login', text: 'Login/Signup' }
];



</script>


<template>
    <header>
        <RouterLink to="/">
            <h1 class="logo">Amazonsz</h1>
        </RouterLink>
        
        <nav>
          <a v-for="link in navLinks" :key="link.to" :href="link.to" class="nav-link">
            {{ link.text }}
          </a>
        </nav>
      </header>
</template>

<style scoped>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
  
  .logo {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  }
  
  nav {
    display: flex;
    gap: 1rem;
  }
  
  .nav-link {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #ffd700;
  }
  


</style>