<template>
    <div class="auth-page">
      <div class="auth-card">
        <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <label for="username">Username</label>
            <input v-model="username" type="text" id="username" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password" required />
          </div>
          <button type="submit" class="submit-button">
            {{ isLogin ? 'Login' : 'Register' }}
          </button>
        </form>
        <p class="toggle-mode" @click="toggleMode">
          {{ isLogin ? "Don't have an account? Register" : "Already have an account? Login" }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/user';
  import { getUserByUsernameAndPassword } from '../mockApi.js';
  
  const userStore = useUserStore();
  const router = useRouter();
  
  const username = ref('');
  const password = ref('');
  const isLogin = ref(true);
  
  const toggleMode = () => {
    isLogin.value = !isLogin.value;
    username.value = '';
    password.value = '';
  };
  
  const handleSubmit = async () => {
    try {
      if (isLogin.value) {
        const user = await getUserByUsernameAndPassword(username.value, password.value);
        userStore.loginUser(user);
        router.push('/dashboard/orders');
      } else {
        // Simulate registration (This can be extended later)
        alert("Registration functionality will be implemented soon.");
      }
    } catch (error) {
      alert(error);
    }
  };
  </script>
  
  <style scoped>
  .auth-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
  }
  
  .auth-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .submit-button {
    width: 100%;
    padding: 0.75rem;
    background-color: #6e8efb;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #5c7cfa;
  }
  
  .toggle-mode {
    text-align: center;
    margin-top: 1rem;
    color: #6e8efb;
    cursor: pointer;
  }
  
  .toggle-mode:hover {
    text-decoration: underline;
  }
  </style>