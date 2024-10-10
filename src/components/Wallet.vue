<template>
    <div class="wallet-page">
      <h2>Your Wallet</h2>
      <p>Current Balance: ${{ balance }}</p>
      
      <div class="wallet-actions">
        <button @click="showRechargeModal" class="action-button">Recharge</button>
        <button @click="showWithdrawModal" class="action-button">Withdraw</button>
      </div>
  
      <!-- Recharge Modal -->
      <div v-if="isRechargeModalVisible" class="modal">
        <div class="modal-content">
          <h3>Recharge Wallet</h3>
          <input type="number" v-model="rechargeAmount" placeholder="Enter amount" class="input" />
          <button @click="recharge" class="modal-button">Confirm</button>
          <button @click="closeRechargeModal" class="modal-button">Cancel</button>
        </div>
      </div>
  
      <!-- Withdraw Modal -->
      <div v-if="isWithdrawModalVisible" class="modal">
        <div class="modal-content">
          <h3>Withdraw Funds</h3>
          <input type="number" v-model="withdrawAmount" placeholder="Enter amount" class="input" />
          <button @click="withdraw" class="modal-button">Confirm</button>
          <button @click="closeWithdrawModal" class="modal-button">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUserStore } from '@/store/user';
  
  const userStore = useUserStore();
  const balance = ref(userStore.user?.balance || 0); // Fetch balance from the user store
  
  // Modals and amount management
  const isRechargeModalVisible = ref(false);
  const isWithdrawModalVisible = ref(false);
  const rechargeAmount = ref(0);
  const withdrawAmount = ref(0);
  
  // Modal management functions
  const showRechargeModal = () => isRechargeModalVisible.value = true;
  const closeRechargeModal = () => isRechargeModalVisible.value = false;
  const showWithdrawModal = () => isWithdrawModalVisible.value = true;
  const closeWithdrawModal = () => isWithdrawModalVisible.value = false;
  
  // Transaction functions
  const recharge = () => {
    balance.value += Number(rechargeAmount.value);
    userStore.user.balance = balance.value; // Update globally
    closeRechargeModal();
  };
  
  const withdraw = () => {
    if (withdrawAmount.value <= balance.value) {
      balance.value -= Number(withdrawAmount.value);
      userStore.user.balance = balance.value; // Update globally
    } else {
      alert('Insufficient balance');
    }
    closeWithdrawModal();
  };
  </script>
  
  <style scoped>
  .wallet-page {
    text-align: center;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
    animation: fadeInDown 1s ease-out;
  }
  
  .wallet-actions {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .action-button {
    background-color: #27ae60;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s;
  }
  
  .action-button:hover {
    background-color: #219150;
    transform: scale(1.05);
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    animation: fadeIn 0.5s ease-in;
  }
  
  .modal-button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    transition: background-color 0.3s ease, transform 0.3s;
  }
  
  .modal-button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
  
  .input {
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: calc(100% - 22px);
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  .input:focus {
    border-color: #3498db;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  