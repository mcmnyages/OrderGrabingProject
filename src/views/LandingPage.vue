<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen font-roboto bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
    <Nav />
    <main class="flex flex-col flex-1 justify-center items-center text-center p-6">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown">Welcome to the Best Deals Marketplace</h2>
      <p class="text-lg md:text-xl mb-6 max-w-xl leading-relaxed">
        Explore the world of great deals, exclusive offers, and more!
      </p>
      <RouterLink to="/login">
        <button class="bg-yellow-400 text-gray-800 border-none py-3 px-6 rounded-full text-lg font-semibold transition-transform transform hover:translate-y-1 hover:shadow-lg">
          Get Started
        </button>
      </RouterLink>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
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
</style>
