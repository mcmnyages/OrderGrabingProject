
<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
  </script>



<template>
    <div class="about-page">
        <Nav/>
      <section class="hero">

        <h1>About Amazonsz E-commerce</h1>
        <p>Your one-stop shop for the best deals in the market.</p>
      </section>
      <section class="content">
        <h2>Our Story</h2>
        <p>
          Amazonsz E-commerce started with a simple mission: to provide the best deals and exclusive offers to our customers. Our journey began in 2024, and since then, we've been committed to delivering quality products and exceptional customer service.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction</li>
          <li>Quality Products</li>
          <li>Exclusive Deals</li>
          <li>Exceptional Service</li>
        </ul>
        <h2>Meet the Team</h2>
        <p>
          We have a diverse team of professionals dedicated to bringing you the best shopping experience. Our team works tirelessly to ensure that every customer is satisfied and every deal is a steal!
        </p>
      </section>
      <Footer/>
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
  