<template>
  <div class="container-scroller d-flex">
    <!-- Include the Sidebar component if needed -->

    <div class="rooms-list-container">
      <form class="d-flex" role="search">
        <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search by room number or type"
          aria-label="Search">
        <button class="btn btn-outline-success" type="submit" @click.prevent="searchRooms">Search</button>
      </form>
      <h1>Book a Room</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Room Type</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in filteredRooms" :key="room.id">
            <td>{{ room.number }}</td>
            <td>{{ room.type }}</td>
            <td>{{ formatPrice(room.price) }}</td>
            <td>{{ room.isAvailable ? 'Available' : 'Unavailable' }}</td>
            <td>
              <button @click="bookRoom(room.id)" :disabled="!room.isAvailable"
                class="btn btn-primary btn-sm float-end">Book</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DataService from '../services/dataservice';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      rooms: [],
      searchQuery: '',
      notification: ''
    };
  },
  computed: {
    filteredRooms() {
      if (this.searchQuery) {
        return this.rooms.filter(room =>
          room.number.includes(this.searchQuery) ||
          room.type.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.rooms;
    }
  },
  methods: {
    async fetchRooms() {
      try {
        const response = await DataService.getAllRooms();
        this.rooms = response.rooms;
        console.log("Rooms retrieved succesfully");
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    },
    formatPrice(price) {
      return `$${(price / 100).toFixed(2)}`;
    },
    async bookRoom(roomId) {
      try {
        const response = await DataService.createReservation({ roomId });
        if (response.success) {
          Swal.fire(
            'Booked!',
            'Your room has been booked.',
            'success'
          );
          this.fetchRooms(); // Refresh the room list after booking
        } else {
          Swal.fire(
            'Error!',
            'This room is taken. Try another one.',
            'error'
          );
        }
      } catch (error) {
        console.error('Error booking room:', error);
        Swal.fire(
          'Error!',
          'An error occurred while booking the room. Please try again.',
          'error'
        );
      }
    },
    searchRooms() {
      // Triggered when the search button is clicked
    }
  },
  async mounted() {
    await this.fetchRooms();
  }
};
</script>

<style scoped>
.rooms-list-container {
  flex-grow: 1;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.btn {
  margin-bottom: 1rem;
}
</style>
