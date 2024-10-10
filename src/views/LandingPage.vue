<template>
  <div class="landing-page">
    <header>
      <h1 class="logo">Amazonsz</h1>
      <nav>
        <a v-for="link in navLinks" :key="link.to" :href="link.to" class="nav-link">
          {{ link.text }}
        </a>
      </nav>
    </header>

    <main>
      <h2 class="main-title">Welcome to the Best Deals Marketplace</h2>
      <p class="main-description">Explore the world of great deals, exclusive offers, and more!</p>
      <a href="/login">
        <button class="get-started-button">Get Started</button>
      </a>
    </main>

    <footer>
      <p>&copy; {{ currentYear }} Amazonsz E-commerce</p>
    </footer>
  </div>
</template>

<script setup>
const navLinks = [
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' },
  { to: '/help', text: 'Help' }
];

const currentYear = new Date().getFullYear();
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: #fff;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
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

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.main-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeInDown 1s ease-out;
}

.main-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
}

.get-started-button {
  background: #ffd700;
  color: #333;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.get-started-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

footer {
  text-align: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    gap: 1rem;
  }

  .main-title {
    font-size: 2rem;
  }
}
</style>