<script setup>
import { RouterLink, useRoute } from 'vue-router'; // Import Vue Router hooks

// Define navigation links
const navLinks = [
  { to: '/login', text: 'Login/Signup' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' },
  { to: '/help', text: 'Help' },
  
];

const route = useRoute(); // Access current route information
</script>

<template>
  <header>
    <RouterLink to="/">
      <h1 class="logo">Amazonsz</h1>
    </RouterLink>

    <nav>
      <!-- Use RouterLink instead of anchor tags for navigation -->
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="nav-link"
       :class="{ active: route.path === link.to }" 
      >
        {{ link.text }}
      </RouterLink>
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
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffd700;
}

.active {
  color: #920e4b;
  font-weight: bold;
}
</style>
