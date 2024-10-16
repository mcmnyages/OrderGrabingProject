<template>
  <div class="transaction">
    <p>{{ transaction.user }} withdrew ${{ transaction.amount }} at {{ transaction.timestamp }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  transaction: Object,
});
</script>

<style scoped>
.transaction {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin: 10px;
}
</style>