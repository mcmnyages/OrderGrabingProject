<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const navLinks = [
  { to: '/login', text: 'Login/Signup' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' },
  { to: '/help', text: 'Help' },
];

const route = useRoute();
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>


<template>
  <header class="header">
    <RouterLink to="/" class="logo">
      <h1>Amazonsz</h1>
    </RouterLink>
    <nav class="nav">
      <button class="menu-toggle" @click="toggleMenu">☰</button>
      <div :class="{ 'nav-links': true, 'show': menuOpen }">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ 'active': route.path === link.to }"
        >
          {{ link.text }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.logo {
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  align-items: center;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
}

.nav-links {
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

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    gap: 0;
    position: absolute;
    top: 4rem;
    right: 1rem;
    background: rgba(42, 31, 80, 0.904);
    padding: 1rem;
    border-radius: 8px;
  }

  .nav-links.show {
    display: flex;
  }

  .nav-link {
    font-size: 18px;
    padding: 0.5rem 0;
  }
}
</style>


