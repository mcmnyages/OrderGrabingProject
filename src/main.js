// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JavaScript (optional)
import 'w3-css/w3.css';
import './assets/tailwind.css';


const pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app');
