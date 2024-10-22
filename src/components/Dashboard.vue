<script setup>
import { computed, ref, onMounted } from 'vue';
import { getAllTransactions, getAllUsers } from '@/mockApi';
import { useUserStore } from '@/store/user';
import { useRouter, useRoute } from 'vue-router';
import Message from './Message.vue';

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();
const user = computed(() => userStore.user);
const usersData = ref([]);
const navLinks = ref([
  { to: '/dashboard/orders', text: 'Order Grabbing', icon: 'fa fa-shopping-cart' },
  { to: '/dashboard/grabbed-orders', text: 'Grabbed Orders', icon: 'fa fa-cube' },
  { to: '/dashboard/wallet', text: 'Wallet', icon: 'fa fa-credit-card' },
  { to: '/dashboard/settings', text: 'Settings', icon: 'fa fa-cogs' },
  { to: '/dashboard/account', text: 'My Account', icon: 'fa fa-user' },
]);
const currentYear = computed(() => new Date().getFullYear());
const isCollapsed = ref(false);
const isMobileMenuOpen = ref(false);

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const logout = async () => {
  try {
    await userStore.logoutUser();
    router.push('/login');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

const transactionsData = ref(null);
const currentTransaction = ref(null);

onMounted(async () => {
  try {
    const [transactions, users] = await Promise.all([getAllTransactions(), getAllUsers()]);
    transactionsData.value = transactions;
    usersData.value = users;
    updateTransaction();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
});

const updateTransaction = () => {
  if (transactionsData.value.length > 0 && usersData.value.length > 0) {
    const randomIndex = Math.floor(Math.random() * transactionsData.value.length);
    const randomTransaction = transactionsData.value[randomIndex];
    const user = usersData.value.find(u => u.id === randomTransaction.user_id);
    currentTransaction.value = {
      ...randomTransaction,
      username: user ? user.username : 'Unknown User',
    };
    setTimeout(() => {
      currentTransaction.value = null;
    }, 5000);
  }
};

onMounted(() => {
  setInterval(() => {
    updateTransaction();
  }, 8000);
});
</script>


<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="lg:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
      <h2 class="text-xl font-bold">Amazonsz</h2>
      <button @click="toggleMobileMenu" class="text-2xl">
        <i class="fa fa-bars"></i>
      </button>
    </header>
    <div class="flex flex-1">
      <aside :class="[
          'bg-gray-800 text-white transition-all duration-300 ease-in-out',
          isCollapsed ? 'w-16' : 'w-64',
          isMobileMenuOpen ? 'block' : 'hidden lg:block'
        ]">
        <div class="p-4 flex justify-between items-center">
          <h2 v-if="!isCollapsed" class="text-xl font-bold">Amazonsz</h2>
          <button @click="toggleCollapse" class="text-white p-2 rounded hover:bg-gray-700">
            <i :class="isCollapsed ? 'fa fa-angle-right' : 'fa fa-angle-left'"></i>
          </button>
        </div>
        <nav class="mt-4">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
            :class="{ 'text-center': isCollapsed, 'bg-gray-900': route.path === link.to }"
          >
            <i :class="link.icon" class="mr-2"></i>
            <span v-if="!isCollapsed">{{ link.text }}</span>
          </router-link>
          <button
            @click="logout"
            class="w-full text-left px-4 py-2 bg-red-800 hover:bg-red-1000 transition-colors duration-200"
            :class="{ 'text-center': isCollapsed }"
          >
            <i class="fa fa-sign-out mr-2"></i>
            <span v-if="!isCollapsed">Logout</span>
          </button>
        </nav>
      </aside>
      <div class="flex-1 flex flex-col">
        <header class="bg-white shadow p-4">
          <h1 class="text-2xl font-semibold text-gray-800">Welcome, {{ user?.username }}</h1>
          <div class="bg-blue-200 shadow w-2/4 p-4">
            <strong> <p>Your Balance: {{ user?.balance }}</p>
              <p>Your Level: {{ user?.level }}</p>
            </strong>
          </div>
        </header>
        <div v-if="currentTransaction" class="fixed top-1/4 left-1/2 z-10">
          <Message :transaction="currentTransaction" />
        </div>
        <main class="flex-1 p-4">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </main>
        <footer class="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {{ currentYear }} Amazonsz E-commerce</p>
        </footer>
      </div>
    </div>
  </div>
</template>


<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
