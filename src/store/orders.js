import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrderStore = defineStore('orders', () => {
  const availableOrders = ref([]);
  const grabbedOrders = ref([]);

  const fetchAvailableOrders = () => {
    availableOrders.value = [
      
    ];
  };

  const grabOrder = (order) => {
    const expirationTime = Date.now() + 24 * 60 * 60 * 1000;
    grabbedOrders.value.push({ ...order, expirationTime });
    availableOrders.value = availableOrders.value.filter((o) => o.id !== order.id);
  };

  return { availableOrders, grabbedOrders, fetchAvailableOrders, grabOrder };
});
