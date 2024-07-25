<template>
  <div class="container">
    <div class="login-wrapper">
      <h1 class="text-center">Admin Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">First Name</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <div class="links">
          <a @click="navigateToForgotPassword" class="link">Forgot Password?</a>
          <a @click="navigateToRegister" class="link register-link">Don't have an account? Register</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import DataService from '@/services/dataservice';
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    async handleLogin() {
      try {
        // Validate input
        if (!this.username || !this.password) {
          this.toast.error('Please fill in all fields.');
          return;
        }

        // Call the API to log in the admin
        const response = await DataService.loginAdmin({
          first_name: this.username,
          password: this.password
        });
        

        // Handle success
        this.toast.success('Login successful!');
        const { token } = response.data;
        // Store the token (e.g., in localStorage)
        localStorage.setItem('authToken', token);
        // Redirect to the admin dashboard or another page
        this.$router.push('/showAnalystics');
      } catch (error) {
        // Handle errors
        const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred';
        this.toast.error(`Failed to log in: ${errorMessage}`);
      }
    },
    navigateToForgotPassword() {
      // Navigate to the forgot password screen
      this.$router.push({ path: '/forgot-password' });
    },
    navigateToRegister() {
      // Navigate to the register screen
      this.$router.push({ path: '/register' });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
}

.login-wrapper {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h1 {
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  background-color: #0056b3;
}

.links {
  margin-top: 1rem;
  text-align: center;
}

.link {
  color: #ff0000; /* Red color for links */
  cursor: pointer;
  text-decoration: underline;
  display: block;
  margin-top: 0.5rem;
}

.register-link {
  font-weight: bold;
}
</style>
