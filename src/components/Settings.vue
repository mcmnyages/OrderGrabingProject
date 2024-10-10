<template>
    <div class="settings-page">
      <h2>Account Settings</h2>
      <form @submit.prevent="saveSettings">
        <div class="form-group">
          <label for="email-notifications">Receive Email Notifications</label>
          <input type="checkbox" v-model="emailNotifications" id="email-notifications" />
        </div>
        <div class="form-group">
          <label for="privacy">Privacy Settings:</label>
          <select v-model="privacy" id="privacy" class="input-select">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button type="submit" class="submit-button">Save Settings</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const emailNotifications = ref(true);
  const privacy = ref('public');
  
  const saveSettings = () => {
    alert(`Settings updated: \nNotifications: ${emailNotifications.value}\nPrivacy: ${privacy.value}`);
  };
  </script>
  
  <style scoped>
  .settings-page {
    max-width: 500px;
    margin: 50px auto;
    padding: 30px;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
  }
  
  h2 {
    color: #333;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="checkbox"] {
    margin-top: 10px;
  }
  
  .input-select {
    width: calc(100% - 22px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  .input-select:focus {
    border-color: #3498db;
  }
  
  .submit-button {
    background-color: #27ae60;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s;
  }
  
  .submit-button:hover {
    background-color: #219150;
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
  