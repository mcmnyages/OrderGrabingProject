<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { getUserByUsernameAndPassword } from '../mockApi.js';

const userStore = useUserStore();
const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const username = ref('');
const email = ref('');
const phoneNumber = ref('');
const country = ref('');
const cryptoWallet = ref('');
const password = ref('');
const isLogin = ref(true);

const toggleMode = () => {
  isLogin.value = !isLogin.value;
  firstName.value = '';
  lastName.value = '';
  username.value = '';
  email.value = '';
  phoneNumber.value = '';
  country.value = '';
  cryptoWallet.value = '';
  password.value = '';
};

const handleSubmit = async () => {
  try {
    if (isLogin.value) {
      const user = await getUserByUsernameAndPassword(username.value || email.value, password.value);
      userStore.loginUser(user);
      router.push('/dashboard/orders');
    } else {
      // Simulate registration (This can be extended later)
      alert(`Registration successful for username: ${username.value}, email: ${email.value}, phone: ${phoneNumber.value}`);
    }
  } catch (error) {
    alert(error);
  }
};
</script>

<template>
  <div class="login_page">
    <Nav />
    <div class="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">{{ isLogin ? 'Login' : 'Register' }}</h2>
        <form @submit.prevent="handleSubmit">
          <div v-if="!isLogin" class="mb-4">
            <label for="firstName" class="block text-gray-600 mb-1">First Name</label>
            <input v-model="firstName" type="text" id="firstName" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div v-if="!isLogin" class="mb-4">
            <label for="lastName" class="block text-gray-600 mb-1">Last Name</label>
            <input v-model="lastName" type="text" id="lastName" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div v-if="!isLogin" class="mb-4">
            <label for="email" class="block text-gray-600 mb-1">Email</label>
            <input v-model="email" type="email" id="email" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div v-if="!isLogin" class="mb-4">
            <label for="username" class="block text-gray-600 mb-1">Username</label>
            <input v-model="username" type="text" id="username" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div v-if="!isLogin" class="mb-4">
            <label for="phoneNumber" class="block text-gray-600 mb-1">Phone Number</label>
            <input v-model="phoneNumber" type="text" id="phoneNumber" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div v-if="!isLogin" class="mb-4">
            <label for="country" class="block text-gray-600 mb-1">Country</label>
            <input v-model="country" type="text" id="country" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div v-if="!isLogin" class="mb-4">
            <label for="cryptoWallet" class="block text-gray-600 mb-1">Crypto Wallet (optional)</label>
            <input v-model="cryptoWallet" type="text" id="cryptoWallet" class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div v-if="isLogin" class="mb-4">
            <label for="loginId" class="block text-gray-600 mb-1">Username or Email</label>
            <input v-model="username" type="text" id="loginId" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-600 mb-1">Password</label>
            <input v-model="password" type="password" id="password" required class="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" class="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-300">
            {{ isLogin ? 'Login' : 'Register' }}
          </button>
        </form>
        <p class="text-center text-indigo-500 mt-4 cursor-pointer hover:underline" @click="toggleMode">
          {{ isLogin ? "Don't have an account? Register" : "Already have an account? Login" }}
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.login_page {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
}
</style>
