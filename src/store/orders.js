import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrderStore = defineStore('orders', () => {
  const availableOrders = ref([]);
  const grabbedOrders = ref([]);

  const fetchAvailableOrders = () => {
    availableOrders.value = [
      { id: 1, description: 'Electronics Bundle', price: 499.99 },
      { id: 2, description: 'Home Decor Set', price: 199.99 },
    ];
  };

  const grabOrder = (order) => {
    const expirationTime = Date.now() + 24 * 60 * 60 * 1000;
    grabbedOrders.value.push({ ...order, expirationTime });
    availableOrders.value = availableOrders.value.filter((o) => o.id !== order.id);
  };

  return { availableOrders, grabbedOrders, fetchAvailableOrders, grabOrder };
});
