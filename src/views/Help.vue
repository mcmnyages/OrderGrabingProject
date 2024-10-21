<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="help-page">
    <Nav />

    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-16">
      <h1 class="text-4xl font-bold mb-4">Help & Support</h1>
      <p class="text-lg">
        Have questions? We’re here to help you every step of the way.
      </p>
    </section>

    <!-- Main Content Section -->
    <section class="content max-w-3xl mx-auto py-12 px-6">
      <h2 class="text-3xl font-semibold text-blue-900 mb-4">Frequently Asked Questions</h2>
      <p class="mb-6">
        Find answers to some of the most commonly asked questions about our products, shipping, payments, and more. 
        We’ve compiled a comprehensive list to make your shopping experience smoother.
      </p>
      <a href="/faq" class="block text-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        Visit Our FAQ Page
      </a>

      <h2 class="text-3xl font-semibold text-blue-900 mt-12 mb-4">Contact Support</h2>
      <p class="mb-6">
        Didn’t find what you were looking for? Our support team is always here to help. 
        Reach out to us via the contact page or directly email us for immediate assistance.
      </p>
      <a href="/contact" class="block text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
        Contact Our Support Team
      </a>

      <h2 class="text-3xl font-semibold text-blue-900 mt-12 mb-4">Help Center</h2>
      <p class="mb-6">
        For more detailed information about your orders, tracking, returns, or account management, check out our comprehensive help center.
      </p>
      <a href="/help-center" class="block text-center bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
        Visit Our Help Center
      </a>
    </section>

    <Footer />
  </div>
</template>



  
  <style scoped>
  .help-page {
    font-family: 'Roboto', sans-serif;
    color: #333;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
  }
  
  .hero {
    color: #fff;
    text-align: center;
    padding: 2rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .content {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .content h2 {
    color: #020f3b;
    margin-bottom: 1rem;
  }
  
  .content p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  </style>
  