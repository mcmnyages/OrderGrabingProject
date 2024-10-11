<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

</script>





<template>
  <div class="landing-page">
    <Nav/>
    <main>
      <h2 class="main-title">Welcome to the Best Deals Marketplace</h2>
      <p class="main-description">Explore the world of great deals, exclusive offers, and more!</p>
      <a href="/login">
        <button class="get-started-button">Get Started</button>
      </a>
    </main>
<Footer/>
  </div>
</template>



<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: #fff;
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