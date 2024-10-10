// src/mockApi.js
import mockData from './data/mock-db.json';

// Fetch user by username and password
export const getUserByUsernameAndPassword = (username, password) => {
  return new Promise((resolve, reject) => {
    const user = mockData.users.find(u => u.username === username && u.password === password);
    if (user) {
      resolve(user);
    } else {
      reject('Invalid username or password.');
    }
  });
};

// Fetch orders for a specific user
export const getUserOrders = (userId) => {
  return new Promise((resolve) => {
    const userOrders = mockData.orders.filter(order => order.user_id === userId);
    resolve(userOrders);
  });
};

// Fetch available orders (not grabbed)
export const getAvailableOrders = () => {
  return new Promise((resolve) => {
    resolve(mockData.available_orders);
  });
};

// Fetch user wallet transactions
export const getUserWallet = (userId) => {
  return new Promise((resolve) => {
    const transactions = mockData.transactions.filter(t => t.user_id === userId);
    resolve(transactions);
  });
};
