
<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
  </script>



<template>
    
    <div class="help-page">
        <Nav/>
      <section class="hero">
        <h1>Help & Support</h1>
        <p>We're here to assist you with any queries you may have.</p>
      </section>
      <section class="content">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to common questions about our services and products.
        </p>
        <h2>Contact Support</h2>
        <p>
          If you need further assistance, please reach out to our support team via the contact page.
        </p>
      </section>
      <Footer/>
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
  