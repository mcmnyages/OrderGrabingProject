<script setup>
import { ref, nextTick ,onMounted} from 'vue';
import { useUserStore } from '@/store/user';
import { getUserWallet } from '@/mockApi';

// Mock data for transactions and payment methods
const transactions = ref([]);



const userStore = useUserStore();
const balance = ref(userStore.user?.balance || 0);

const isModalVisible = ref(false);
const amount = ref(0);
const selectedMethod = ref('');
const actionType = ref('');



onMounted(async () => {
  try {
    transactions.value = await getUserWallet(userStore.user?.id)
  } catch (error) {
    console.error('Failed to fetch grabbed orders:', error)
  }
})


// Payment options with images
const paymentMethods = [
  { name: 'M-Pesa', image: 'https://th.bing.com/th/id/OIP.hU5JWeU_1WguktuIkXdeVAHaFZ?rs=1&pid=ImgDetMain' },
  { name: 'PayPal', image: 'https://images.hindustantimes.com/tech/img/2023/08/07/1600x900/PAYPAL-HOLDINGS-RESULTS--0_1691422760889_1691422835377.JPG' },
  { name: 'Bank Transfer', image: 'https://th.bing.com/th/id/OIP.T9kP_nc6c4UJ6NHDPT-mugHaFs?rs=1&pid=ImgDetMain' },
  { name: 'Cryptocurrency', image: 'https://th.bing.com/th/id/OIP.Jshke68n8z1MQwIGy5hAbAHaE8?rs=1&pid=ImgDetMain' },
];

// Modal management
const openModal = (method, type) => {
  selectedMethod.value = method;
  actionType.value = type;
  isModalVisible.value = true;
  nextTick(() => {
    document.querySelector('input').focus();
  });
};

const closeModal = () => {
  isModalVisible.value = false;
  amount.value = 0;  // Reset amount
};

// Transaction handling
const handleTransaction = () => {
  if (amount.value <= 0) {
    alert('Please enter a valid amount');
    return;
  }
  
  if (actionType.value === 'recharge') {
    balance.value += Number(amount.value);
    transactions.value.push({
      type: 'Recharge',
      amount: amount.value,
      method: selectedMethod.value,
      date: new Date().toISOString().split('T')[0],
    });
  } else {
    if (amount.value > balance.value) {
      alert('Insufficient balance');
      return;
    }
    balance.value -= Number(amount.value);
    transactions.value.push({
      type: 'Withdraw',
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
    <h2 class="text-center text-2xl font-bold">Your Wallet</h2>
    <p class="text-center text-xl">Current Balance: ${{ balance }}</p>

    <div class="payment-methods grid grid-cols-2 gap-4 my-4">
      <div
        v-for="method in paymentMethods"
        :key="method.name"
        class="payment-card border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg"
        @click="openModal(method.name, 'recharge')"
      >
        <img :src="method.image" alt="Payment Method" class="h-16 w-16 mb-2" />
        <span class="font-medium">{{ method.name }}</span>
      </div>
    </div>

    <div v-if="isModalVisible" class="modal fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div class="modal-content bg-white rounded-lg shadow-lg p-6 w-1/4">
        <h3 class="text-lg font-semibold mb-4">{{ actionType === 'recharge' ? 'Recharge' : 'Withdraw' }} Funds via {{ selectedMethod }}</h3>
        <input
          type="number"
          v-model="amount"
          class="w-full border rounded p-2 mb-4"
          placeholder="Enter amount"
        />
        <footer class="flex justify-between">
          <button @click="handleTransaction" class="bg-blue-500 text-white rounded px-4 py-2">Confirm</button>
          <button @click="closeModal" class="bg-gray-300 rounded px-4 py-2">Cancel</button>
        </footer>
      </div>
    </div>

    <div class="transaction-history mt-8">
      <h3 class="text-xl font-semibold mb-2">Transaction History</h3>
      <ul class="bg-white shadow-md rounded-lg">
        <li
          v-for="(transaction, index) in transactions"
          :key="index"
          class="border-b p-4 flex justify-between"
        >
          <span>{{ transaction.type}} of <strong>${{ transaction.amount }} </strong>via {{ transaction.method }}</span>
          <span class="text-gray-500">{{ transaction.date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.wallet-page {
  font-family: 'Roboto', sans-serif;
}

.payment-methods {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.payment-card {
  transition: transform 0.2s;
}

.payment-card:hover {
  transform: scale(1.05);
}

.modal {
  z-index: 10;
}

.transaction-history {
  margin-top: 2rem;
}

.transaction-history li {
  transition: background 0.3s;
}

.transaction-history li:hover {
  background: #f0f0f0;
}
</style>
