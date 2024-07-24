<template>
    <div class="add-room">
      <h1>Add Room</h1>
  
      <!-- Room Form -->
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="room-number">Room Number</label>
          <input type="text" id="room-number" v-model="form.number" required />
        </div>
        <div class="form-group">
          <label for="room-type">Room Type</label>
          <input type="text" id="room-type" v-model="form.type" required />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" v-model="form.price" required />
        </div>
        <div class="form-group">
          <label for="status">Availability</label>
          <select id="status" v-model="form.status">
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>
        <button type="submit" class="btn">Add Room</button>
      </form>
    </div>
  </template>
  
  <script>
  import DataService from '../../services/dataservice';
  import { useToast } from 'vue-toastification';
  
  export default {
    name: 'AddRoom',
    data() {
      return {
        form: {
          number: '',
          type: '',
          price: '',
          status: 'Available'
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
          await DataService.addRoom(this.form);
          this.toast.success('Room added successfully!');
          this.resetForm();
        } catch (error) {
          console.error('Error adding room:', error);
          this.toast.error('Failed to add room.');
        }
      },
      resetForm() {
        this.form = {
          number: '',
          type: '',
          price: '',
          status: 'Available'
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .add-room {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
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
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  