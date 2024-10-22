<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/store/user';
import { getUserWallet } from '@/mockApi';

const transactions = ref([]);
const userStore = useUserStore();
const balance = ref(userStore.user?.balance || 0);
const isModalVisible = ref(false);
const amount = ref(0);
const selectedMethod = ref('');
const actionType = ref('');

onMounted(async () => {
  try {
    transactions.value = await getUserWallet(userStore.user?.id);
  } catch (error) {
    console.error('Failed to fetch transactions:', error);
    alert('Could not fetch transactions. Please try again later.');
  }
});

const paymentMethods = [
  { name: 'M-Pesa', image: 'https://th.bing.com/th/id/OIP.hU5JWeU_1WguktuIkXdeVAHaFZ?rs=1&pid=ImgDetMain' },
  { name: 'PayPal', image: 'https://images.hindustantimes.com/tech/img/2023/08/07/1600x900/PAYPAL-HOLDINGS-RESULTS--0_1691422760889_1691422835377.JPG' },
  { name: 'Bank Transfer', image: 'https://th.bing.com/th/id/OIP.T9kP_nc6c4UJ6NHDPT-mugHaFs?rs=1&pid=ImgDetMain' },
  { name: 'Cryptocurrency', image: 'https://th.bing.com/th/id/OIP.Jshke68n8z1MQwIGy5hAbAHaE8?rs=1&pid=ImgDetMain' },
];

const openModal = (method) => {
  selectedMethod.value = method;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  amount.value = 0;
  actionType.value = '';
};

const handleTransaction = () => {
  if (amount.value <= 0) {
    alert('Please enter a valid amount');
    return;
  }
  if (actionType.value === 'recharge') {
    balance.value += Number(amount.value);
    transactions.value.push({
      type: 'recharge',
      amount: amount.value,
      method: selectedMethod.value,
      date: new Date().toISOString().split('T')[0],
    });
  } else if (actionType.value === 'withdraw') {
    if (amount.value > balance.value) {
      alert('Insufficient balance');
      return;
    }
    balance.value -= Number(amount.value);
    transactions.value.push({
      type: 'rithdraw',
      amount: amount.value,
      method: selectedMethod.value,
      date: new Date().toISOString().split('T')[0],
    });
  }
  closeModal();
};
</script>

<template>
  <div class="wallet-page container mx-auto p-4">
    <h2 class="text-center text-3xl font-extrabold mb-4">Your Wallet</h2>
    <p class="text-center text-xl mb-8">Current Balance: <span class="font-semibold">${{ balance }}</span></p>

    <div class="payment-methods grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
      <div
        v-for="method in paymentMethods"
        :key="method.name"
        class="payment-card border rounded-xl p-4 flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105"
        @click="openModal(method.name)"
      >
        <img :src="method.image" alt="Payment Method" class="h-16 w-16 mb-4" />
        <span class="font-medium text-lg">{{ method.name }}</span>
      </div>
    </div>

    <div v-if="isModalVisible" class="modal fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
      <div class="modal-content bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
        <h3 class="text-center text-2xl font-bold mb-6">Action for {{ selectedMethod }}</h3>

        <div class="action-buttons flex justify-around mb-6">
          <button @click="actionType = 'recharge'" class="action-button bg-green-600 text-white rounded-lg px-6 py-2 hover:bg-green-500">Recharge</button>
          <button @click="actionType = 'withdraw'" class="action-button bg-orange-600 text-white rounded-lg px-6 py-2 hover:bg-orange-500">Withdraw</button>
        </div>

        <div v-if="actionType" class="mb-6">
          <h4 class="text-center mb-2 text-lg">{{ actionType === 'recharge' ? 'Enter Recharge Amount' : 'Enter Withdraw Amount' }}</h4>
          <input
            type="number"
            v-model="amount"
            class="w-full border rounded-lg p-3 text-center mb-4"
            placeholder="Enter amount"
          />
        </div>

        <footer class="modal-footer flex justify-between">
          <button @click="handleTransaction" class="confirm-button bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-500" :disabled="!actionType">Confirm</button>
          <button @click="closeModal" class="cancel-button bg-red-600 text-white rounded-lg px-6 py-2 hover:bg-red-500">Cancel</button>
        </footer>
      </div>
    </div>

    <div class="transaction-history mt-8">
      <h3 class="text-2xl font-bold mb-4">Transaction History</h3>
      <ul class="bg-white shadow-lg rounded-lg">
        <li
          v-for="(transaction, index) in transactions"
          :key="index"
          class="transaction-item border-b p-4 flex justify-between items-center hover:bg-gray-100"
        >
          <span>{{ transaction.type }} of <strong>${{ transaction.amount }}</strong> via {{ transaction.method }}</span>
          <span class="text-gray-500">{{ transaction.date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.wallet-page {
  font-family: 'Inter', sans-serif;
}
.payment-methods {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
.payment-card {
  transition: transform 0.2s ease-in-out;
}
.modal {
  z-index: 50;
}
.modal-content {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.transaction-history {
  margin-top: 2rem;
}
.transaction-item {
  transition: background 0.3s ease-in-out;
}
.transaction-item:hover {
  background: #f0f0f0;
}
</style>
