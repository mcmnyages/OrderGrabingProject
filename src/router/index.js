import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue'; // Updated path to the landing page
import Login from '@/views/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import Orders from '@/components/Orders.vue';
import Wallet from '@/components/Wallet.vue';
import Settings from '@/components/Settings.vue';
import Account from '@/components/Account.vue';
import GrabbedOrders from '@/components/GrabbedOrders.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Help from '@/views/Help.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage, // Correct component for landing page
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/about',
    name: 'About',
    component: About,
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },

  {
    path: '/help',
    name: 'Help',
    component: Help,
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      { path: 'orders', component: Orders },
      { path: 'grabbed-orders', component: GrabbedOrders },
      { path: 'wallet', component: Wallet },
      { path: 'settings', component: Settings },
      { path: 'account', component: Account },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
