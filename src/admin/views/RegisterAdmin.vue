<template>
    <div class="container">
      <div class="register-wrapper">
        <h1 class="text-center">Register Admin</h1>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" v-model="form.firstName" required />
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" v-model="form.lastName" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="form.password" required />
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" v-model="form.confirmPassword" required />
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
          <div class="login-link">
            <p>Already have an account? <router-link to="/admin-login" class="login-link-text">Login</router-link></p>
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
        form: {
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: ''
        }
      };
    },
    setup() {
      const toast = useToast();
      return { toast };
    },
    methods: {
        async handleSubmit() {
  try {
    // Validate that passwords match
    if (this.form.password !== this.form.confirmPassword) {
      this.toast.error('Passwords do not match!');
      return;
    }

    // Check for empty fields
    if (!this.form.firstName || !this.form.lastName || !this.form.password || !this.form.confirmPassword) {
      this.toast.error('All fields are required!');
      return;
    }

    // Call the API to register the admin
    await DataService.registerAdmin({
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      password: this.form.password,
      confirmPassword: this.form.confirmPassword
    });

    // Display success message and redirect
    this.toast.success('Admin registered successfully!');
    this.resetForm();
    this.$router.push('/admin-login');
  } catch (error) {
    // Handle errors
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred';
    this.toast.error(`Failed to register admin: ${errorMessage}`);
  }
},
      resetForm() {
        this.form = {
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: ''
        };
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
  
  .register-wrapper {
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
  
  .login-link {
    margin-top: 1rem;
    text-align: center;
  }
  
  .login-link-text {
    color: #007bff;
    text-decoration: none;
  }
  
  .login-link-text:hover {
    text-decoration: underline;
  }
  </style>
  