<template>
    <div>
      <h1>Add New Reservation</h1>
  
      <div class="form-container">
        <form @submit.prevent="submitForm" class="needs-validation" novalidate>
          <!-- User ID Input -->
          <div class="form-group">
            <label for="userId" class="form-label">User ID</label>
            <input v-model="form.userId" type="number" class="form-control" id="userId" placeholder="1" required>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide a valid User ID.
            </div>
          </div>
  
          <!-- Room ID Input -->
          <div class="form-group">
            <label for="roomId" class="form-label">Room ID</label>
            <input v-model="form.roomId" type="number" class="form-control" id="roomId" placeholder="2" required>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please provide a valid Room ID.
            </div>
          </div>
  
          <!-- Check-in Date Input -->
          <div class="form-group">
            <label for="checkInDate" class="form-label">Check-in Date</label>
            <input v-model="form.checkInDate" type="date" class="form-control" id="checkInDate" required>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please select a valid check-in date.
            </div>
          </div>
  
          <!-- Check-out Date Input -->
          <div class="form-group">
            <label for="checkOutDate" class="form-label">Check-out Date</label>
            <input v-model="form.checkOutDate" type="date" class="form-control" id="checkOutDate" required>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please select a valid check-out date.
            </div>
          </div>
  
          <!-- Status Input -->
          <div class="form-group">
            <label for="status" class="form-label">Status</label>
            <select v-model="form.status" class="form-select" id="status" required>
              <option value="" disabled selected>Choose...</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please select a valid status.
            </div>
          </div>
  
          <!-- Submit Button -->
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Submit Form</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import DataService from '../../services/dataservice';
  
  export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        checkInDate: '',
        checkOutDate: '',
        status: '',
        userId: 1, // Adjust as needed
        roomId: 2  // Adjust as needed
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        // Validate references
        const isValid = await DataService.validateReferences(this.form.userId, this.form.roomId);
        if (!isValid) {
          alert('Invalid user or room reference.');
          return;
        }

        // Proceed to create reservation
        const response = await DataService.createReservation(this.form);
        if (response.status === 200) {
          alert('Reservation added successfully!');
          this.resetForm();
        } else {
          alert('Failed to add reservation. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to add reservation. Please try again.');
      }
    },
    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        checkInDate: '',
        checkOutDate: '',
        status: '',
        userId: 1, // Adjust as needed
        roomId: 2  // Adjust as needed
      };
    }
  }
};
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-label {
    color: #495057;
  }
  
  .form-control:invalid, .form-select:invalid {
    border-color: #dc3545;
  }
  
  .form-control:valid, .form-select:valid {
    border-color: #28a745;
  }
  </style>
  