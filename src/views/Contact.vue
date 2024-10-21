<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="contact-page">
    <Nav />
    <section class="hero bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-16">
      <h1 class="text-4xl font-bold mb-4">We'd Love to Hear From You!</h1>
      <p class="text-lg">
        Whether you have a question, feedback, or need support, our team is ready to assist you.
        Reach out to us, and we’ll get back to you as soon as possible.
      </p>
    </section>

    <section class="content max-w-3xl mx-auto py-12 px-6">
      <h2 class="text-3xl font-semibold text-blue-900 mb-4">How Can We Help?</h2>
      <p class="mb-6">
        Need assistance with your orders or have a question about our services? We’re always here to help. 
        Feel free to contact our support team directly, or check out our <a href="/help-center" class="text-blue-600 hover:underline">Help Center</a> for quick answers.
      </p>

      <p class="mb-6">
        You can also reach us via email for personalized support. Our team is available 24/7 to address any issues or queries.
      </p>
      <p class="mb-6">
        For support, email us at: 
        <a href="mailto:support@amazonsz.com" class="text-blue-600 hover:underline">support@amazonsz.com</a>
      </p>

      <h3 class="text-2xl font-semibold text-blue-900 mb-4">Visit Us on Social Media</h3>
      <p class="mb-6">
        Stay connected with us! Follow our social media pages for the latest updates, exclusive deals, and promotions.
        Engage with our community and be the first to know about new arrivals and special offers.
      </p>

      <!-- Social Links -->
      <div class="social-links flex justify-center space-x-4 mt-6">
        <a href="#" class="social-link bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-600">
          <i class="fa fa-facebook mr-2"></i> Facebook
        </a>
        <a href="#" class="social-link bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-400">
          <i class="fa fa-twitter mr-2"></i> Twitter
        </a>
        <a href="#" class="social-link bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-pink-500">
          <i class="fa fa-instagram mr-2"></i> Instagram
        </a>
        <a href="#" class="social-link bg-red-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-red-500">
          <i class="fa fa-youtube mr-2"></i> YouTube
        </a>
      </div>

      <h3 class="text-2xl font-semibold text-blue-900 mt-12 mb-4">Frequently Asked Questions</h3>
      <p class="mb-6">
        Not sure how something works? Visit our <a href="/faq" class="text-blue-600 hover:underline">FAQ page</a> for answers to common questions.
        From shipping details to payment methods, we’ve got you covered.
      </p>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
/* Optional if you'd like to customize some parts specifically */
.contact-page{
  background: linear-gradient(135deg, #6e8efb, #a777e3);
}

</style>
