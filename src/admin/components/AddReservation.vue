<template>
    <div class="container-scroller d-flex" >
         <!-- Include the Sidebar component -->
    <AdminSidebar />
    
    <div class="add-reservation container">
      <h1 class="mb-4">Add Reservation</h1>
  
      <!-- Reservation Form -->
      <form @submit.prevent="handleSubmit" class="row g-3">
        <div class="col-12">
          <label for="user_id" class="form-label">User ID</label>
          <input type="text" class="form-control" id="user_id" v-model="form.user_id" required>
          <div class="invalid-feedback">
            Please provide a user ID.
          </div>
        </div>
        <div class="col-12">
          <label for="room_id" class="form-label">Room ID</label>
          <input type="text" class="form-control" id="room_id" v-model="form.room_id" required>
          <div class="invalid-feedback">
            Please provide a room ID.
          </div>
        </div>
        <div class="col-12">
          <label for="check_in_date" class="form-label">Check-in Date</label>
          <input type="date" class="form-control" id="check_in_date" v-model="form.check_in_date" required>
          <div class="invalid-feedback">
            Please provide a check-in date.
          </div>
        </div>
        <div class="col-12">
          <label for="check_out_date" class="form-label">Check-out Date</label>
          <input type="date" class="form-control" id="check_out_date" v-model="form.check_out_date" required>
          <div class="invalid-feedback">
            Please provide a check-out date.
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Add Reservation</button>
        </div>
      </form>
    </div>
    </div>
   
  </template>
  
  <script>
  import AdminSidebar from './AdminSidebar.vue';
  import DataService from '../../services/dataservice';
  import { useToast } from 'vue-toastification';
  
  export default {
    name: 'AddReservation',
    components: {
    AdminSidebar
  },
   
    data() {
      return {
        form: {
          user_id: '',
          room_id: '',
          check_in_date: '',
          check_out_date: ''
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
            await DataService.createReservation(this.form);
             this.toast.success('Reservation added successfully!');
           this.resetForm();
          } catch (error) {
                const errorMessage = error.response?.data?.error || error.message || 'Unknown error occurred';
               console.error('Error adding reservation:', errorMessage);
             this.toast.error(`Error adding reservation: ${errorMessage}`);
        }
    },
      resetForm() {
        this.form = {
          user_id: '',
          room_id: '',
          check_in_date: '',
          check_out_date: ''
        };
      }
    }
  };
  </script>
  
  <style>
  /* Optional: Add custom styles here */
  </style>
  