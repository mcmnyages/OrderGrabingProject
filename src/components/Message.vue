<script setup>
import { useUserStore } from '@/store/user';
import { computed } from 'vue';
const props = defineProps({
  transaction: Object,
});


const userStore = useUserStore();
const user = computed(() => userStore.user);
</script>


<template>
  <div class="transaction">
    <p>User {{ transaction.username }} withdrew <strong>${{ transaction.amount }}</strong> at {{ transaction.date }}</p>
  </div>
</template>



<style scoped>
.transaction {
  background-color: #f8d7da;
  color: #660912;
  padding: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin: 10px;
}
</style>