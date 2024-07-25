<template>
    <div class="container-scroller d-flex">
      <!-- Include the Sidebar component -->
      <AdminSidebar />
  
      <div class="content-wrapper flex-grow-1">
        <div class="add-user">
          <h1>Add User</h1>
  
          <!-- User Form -->
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input type="text" id="first-name" v-model="form.first_name" required />
            </div>
            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input type="text" id="last-name" v-model="form.last_name" required />
            </div>
            <div class="form-group">
              <label for="role">Role</label>
              <select id="role" v-model="form.role">
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
              </select>
            </div>
            <button type="submit" class="btn">Add User</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AdminSidebar from './AdminSidebar.vue';
  import DataService from '../../services/dataservice';
  import { useToast } from 'vue-toastification';
  
  export default {
    name: 'AddUser',
    components: {
      AdminSidebar
    },
    data() {
      return {
        form: {
          first_name: '',
          last_name: '',
          role: 'customer'
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
          await DataService.addUser(this.form);
          this.toast.success('User added successfully!');
          this.resetForm();
        } catch (error) {
          const errorMessage = error.response?.data?.error || error.message || 'Unknown error occurred';
          console.error('Error adding user:', errorMessage);
          this.toast.error(`Failed to add user: ${errorMessage}`);
        }
      },
      resetForm() {
        this.form = {
          first_name: '',
          last_name: '',
          role: 'customer'
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .container-scroller {
    display: flex;
    height: 100vh;
  }
  
  .content-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 2rem;
  }
  
  .add-user {
    flex-grow: 1;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  input,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
    width: 100%;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  