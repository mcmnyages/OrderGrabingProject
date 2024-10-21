import { defineStore } from 'pinia';
import { ref } from 'vue';
import mockData from '@/data/mock-db.json';

export const useTransactionStore = defineStore('transactions', () => {
  const transactions = ref([]);

  const loadTransactions = () => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      transactions.value = JSON.parse(savedTransactions);
    } else {
      transactions.value = mockData.transactions;
      localStorage.setItem('transactions', JSON.stringify(mockData.transactions));
    }
  };

  const getUserTransactions = (userId) => {
    return transactions.value.filter(transaction => transaction.user_id === userId);
  };

  return { transactions, loadTransactions, getUserTransactions };
});
