<template>
    <div class="account-page">
      <h2>My Account</h2>
      <img :src="userStore.user.profile_picture" alt="profile picture">
      <form @submit.prevent="updateAccount">
        <div class="form-group">
          <label for="username">Username:</label>
          <input v-model="username" type="text" id="username" required class="input" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required class="input" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" required class="input" />
        </div>
        <button type="submit" class="submit-button">Update Account</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUserStore } from '@/store/user';
  
  const userStore = useUserStore();
  const username = ref(userStore.user?.username || '');
  const email = ref(userStore.user?.email || '');
  const password = ref('');
  
  const updateAccount = () => {
    userStore.user.username = username.value;
    userStore.user.email = email.value;
    userStore.user.password = password.value; // Simulate updating account
    alert('Account updated successfully');
  };
  </script>
  
  <style scoped>
  .account-page {
    max-width: 500px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    animation: fadeIn 1s ease-in-out;
  }
  
.account-page img{
    width: 450px;
    height: inherit;
    margin-bottom: 40px;
}

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .input {
    width: calc(100% - 22px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  .input:focus {
    border-color: #3498db;
  }
  
  .submit-button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s;
  }
  
  .submit-button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  