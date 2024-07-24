<template>
  <div class="container">
    <h2>{{ bookingToEdit ? 'Update Booking' : 'Book Room' }}</h2>
    <form @submit.prevent="submitBooking">
      <div class="form-group">
        <label for="name">Your Name:</label>
        <input type="text" v-model="booking.name" required />
      </div>
      <div class="form-group">
        <label for="date">Date:</label>
        <input type="date" v-model="booking.date" required />
      </div>
      <div class="form-group">
        <label for="time">Time:</label>
        <input type="time" v-model="booking.time" required />
      </div>
      <div class="form-group">
        <label for="room">Room:</label>
        <select v-model="booking.roomId" required>
          <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name }}</option>
        </select>
      </div>
      <div class="form-buttons">
        <button type="submit" class="btn-submit">{{ bookingToEdit ? 'Update' : 'Submit' }} Booking</button>
        <button type="button" @click="confirmCancel" class="btn-cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      booking: {
        name: '',
        date: '',
        time: '',
        roomId: null, // Initially selected room id
      },
      bookingToEdit: null,
      rooms: [
        { id: 1, name: 'Room A' },
        { id: 2, name: 'Room B' },
        { id: 3, name: 'Room C' },
      ], // Replace with actual data or fetch from API
    };
  },
  created() {
    const bookingParams = this.$route.params;
    if (bookingParams.name) {
      this.booking = { ...bookingParams };
      this.bookingToEdit = true;
    }
  },
  methods: {
    submitBooking() {
      if (this.bookingToEdit) {
        // Update booking logic here
        alert('Booking updated: ' + JSON.stringify(this.booking));
      } else {
        // New booking logic here
        alert('Booking submitted: ' + JSON.stringify(this.booking));
      }
      this.$router.push({ name: 'bookingDetails', params: { ...this.booking } });
    },
    confirmCancel() {
      if (confirm("Are you sure you want to cancel? Any unsaved changes will be lost.")) {
        this.cancelBooking();
      }
    },
    cancelBooking() {
      // Optionally handle cancellation logic, e.g., reset form fields
      this.booking = {
        name: '',
        date: '',
        time: '',
        roomId: null,
      };
      // Redirect or handle cancellation action as needed
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  border-radius: 8px;
}

form {
  display: grid;
  gap: 15px;
}

.form-group {
  display: grid;
  gap: 5px;
  grid-template-columns: auto 1fr; /* Align label and input on the same row */
}

label {
  font-weight: bold;
  text-align: right; /* Align labels to the right */
}

input, select {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn-submit,
.btn-cancel {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit {
  background-color: #007bff;
  color: white;
}

.btn-cancel {
  background-color: #dc3545;
  color: white;
}

.btn-submit:hover,
.btn-cancel:hover {
  opacity: 0.9;
}
</style>
