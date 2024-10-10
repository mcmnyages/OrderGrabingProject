import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);

  const loginUser = (userData) => {
    user.value = userData;
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const loadUser = () => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      user.value = JSON.parse(savedUser);
    }
  };

  const logoutUser = () => {
    user.value = null;
    localStorage.removeItem('user');
  };

  return { user, loginUser, loadUser, logoutUser };
});
