<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="about-page">
    <Nav />

    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-16">
      <h1 class="text-4xl font-bold mb-4">About Amazonsz E-commerce</h1>
      <p class="text-lg">
        Your ultimate destination for unbeatable deals, premium products, and top-notch service.
      </p>
    </section>

    <!-- Main Content Section -->
    <section class="content max-w-3xl mx-auto py-12 px-6">
      <h2 class="text-3xl font-semibold text-blue-900 mb-4">Our Story</h2>
      <p class="mb-6">
        At Amazonsz E-commerce, we embarked on our journey in 2020 with a simple goal: 
        to offer the best deals and create a seamless online shopping experience. 
        Today, we proudly serve thousands of satisfied customers, delivering premium products across various categories.
      </p>

      <h2 class="text-3xl font-semibold text-blue-900 mb-4">Our Values</h2>
      <ul class="list-disc pl-5 mb-6">
        <li class="mb-2"><strong>Customer Satisfaction:</strong> Everything we do revolves around our customers.</li>
        <li class="mb-2"><strong>Quality Products:</strong> Only the best makes it to our catalog.</li>
        <li class="mb-2"><strong>Exclusive Deals:</strong> We secure the best bargains just for you.</li>
        <li class="mb-2"><strong>Exceptional Service:</strong> Our customer support goes above and beyond.</li>
      </ul>

      <h2 class="text-3xl font-semibold text-blue-900 mb-4">Meet the Team</h2>
      <p class="mb-6">
        Behind Amazonsz is a passionate, diverse team that thrives on innovation and customer care. 
        From product curators to support specialists, each member plays a vital role in ensuring a seamless shopping experience.
        We work tirelessly to bring you the best products and deals, always with a smile!
      </p>

      <h2 class="text-3xl font-semibold text-blue-900 mb-4">Why Choose Us?</h2>
      <p class="mb-6">
        We believe that shopping should be enjoyable and stress-free. That’s why we offer a curated selection of high-quality products, exceptional customer support, and a shopping experience tailored to your needs.
      </p>
    </section>

    <Footer />
  </div>
</template>

  
  <style scoped>
  .about-page {
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
    color: #0a194b;
    margin-bottom: 1rem;
  }
  
  .content p, .content ul {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .content ul {
    padding-left: 1.2rem;
  }
  
  .content ul li {
    list-style-type: disc;
  }
  </style>
  