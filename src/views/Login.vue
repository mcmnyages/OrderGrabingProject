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
  <div class="login-page">
    <Nav />
    <div class="flex flex-col items-center justify-center min-h-screen py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500 to-purple-500">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-8">
        <h2 class="text-center text-3xl font-extrabold text-gray-900">{{ isLogin ? 'Login' : 'Register' }}</h2>
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
          <div v-if="!isLogin">
            <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
            <input v-model="firstName" type="text" id="firstName" required class="input-field" />
          </div>
          <div v-if="!isLogin">
            <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
            <input v-model="lastName" type="text" id="lastName" required class="input-field" />
          </div>
          <div v-if="!isLogin">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="email" type="email" id="email" required class="input-field" />
          </div>
          <div v-if="!isLogin">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input v-model="username" type="text" id="username" required class="input-field" />
          </div>
          <div v-if="!isLogin">
            <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <input v-model="phoneNumber" type="text" id="phoneNumber" required class="input-field" />
          </div>
          <div v-if="!isLogin">
            <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
            <input v-model="country" type="text" id="country" required class="input-field" />
          </div>
          <div v-if="!isLogin">
            <label for="cryptoWallet" class="block text-sm font-medium text-gray-700">Crypto Wallet (optional)</label>
            <input v-model="cryptoWallet" type="text" id="cryptoWallet" class="input-field" />
          </div>
          <div v-if="isLogin">
            <label for="loginId" class="block text-sm font-medium text-gray-700">Username or Email</label>
            <input v-model="username" type="text" id="loginId" required class="input-field" />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input v-model="password" type="password" id="password" required class="input-field" />
          </div>
          <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
            {{ isLogin ? 'Login' : 'Register' }}
          </button>
        </form>
        <p class="text-center text-indigo-600 cursor-pointer hover:underline mt-4" @click="toggleMode">
          {{ isLogin ? "Don't have an account? Register" : "Already have an account? Login" }}
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.login-page {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
}
.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: border-color 0.2s;
}
.input-field:focus {
  outline: none;
  border-color: #4f46e5;
}
</style>
