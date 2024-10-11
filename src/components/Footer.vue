<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
 <div>

        <footer>
            <p>&copy; {{ currentYear }} Amazonsz E-commerce</p>
          </footer>
    
    </div>
</template>

<style scoped>

footer {
    text-align: center;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.1);
  }
</style>