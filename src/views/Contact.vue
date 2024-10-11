
<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
  </script>


<template>
    
    <div class="contact-page">
        <Nav/>
      <section class="hero">
        <h1>Contact Us</h1>
        <p>We're here to help and answer any questions you might have.</p>
      </section>
      <section class="content">
        <h2>Get in Touch</h2>
        <p>
          For support, email us at: <a href="mailto:support@amazonsz.com">support@amazonsz.com</a>
        </p>
        <p>
          Follow us on social media for updates and exclusive offers.
        </p>
        <div class="social-links">
          <a href="#" class="social-link">Facebook</a>
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">Instagram</a>
        </div>
      </section>
      <Footer/>
    </div>
  </template>
  
 
  
  <style scoped>
  .contact-page {
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
    color: #041550;
    margin-bottom: 1rem;
  }
  
  .content p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .content a {
    color: #091641;
    text-decoration: none;
  }
  
  .content a:hover {
    text-decoration: underline;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .social-link {
    background: #18422f;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background 0.3s;
  }
  
  .social-link:hover {
    background: #4c2d72;
  }
  </style>
  