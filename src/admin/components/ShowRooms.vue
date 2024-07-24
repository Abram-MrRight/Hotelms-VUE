<template>
  <div class="container-scroller d-flex">
    <!-- Include the Sidebar component -->
    <AdminSidebar />

  <div class="rooms-list-container">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <h1>All Rooms</h1>
    <div class="d-flex justify-content-end mb-1">
      <button @click="addRoom" class="btn btn-success">Add</button>
    </div>
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
        <tr v-for="room in rooms" :key="room.room_id">
          <td>{{ room.number }}</td>
          <td>{{ room.type }}</td>
          <td>{{ formatPrice(room.price) }}</td>
          <td>{{ room.status }}</td>
          <td>
            <button @click="editRoom(room.room_id)" class="btn btn-primary btn-sm float-end">Edit</button>
            <button @click="confirmDeleteRoom(room.room_id)" class="btn btn-danger btn-sm float-end">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import AdminSidebar from './AdminSidebar.vue'; 
import DataService from '../../services/dataservice';
import Swal from 'sweetalert2';

export default {
  components: {
    AdminSidebar
  },
  data() {
    return {
      rooms: []
    };
  },
  methods: {
    async fetchRooms() {
      try {
        const response = await DataService.getAllRooms();
        this.rooms = response.data.rooms;
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    },
    formatPrice(price) {
      return `$${(price / 100).toFixed(2)}`;
    },
    addRoom() {
      this.$router.push({ path: '/add-room' });
    },
    editRoom(roomId) {
      this.$router.push({ path: '/rooms', query: { id: roomId } });
    },
    async confirmDeleteRoom(roomId) {
      try {
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: 'This action cannot be undone.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
          const success = await this.deleteRoom(roomId);
          if (success) {
            Swal.fire(
              'Deleted!',
              'The room has been deleted.',
              'success'
            );
          } else {
            Swal.fire(
              'Error!',
              'Failed to delete the room.',
              'error'
            );
          }
        }
      } catch (error) {
        console.error('Error fetching room:', error);
        Swal.fire(
          'Error!',
          'There was a problem deleting the room.',
          'error'
        );
      }
    },
    async deleteRoom(roomId) {
      try {
        // Assuming deleteRoom API responds with success status
        const response = await DataService.deleteRoom(roomId);
        if (response.status === 200) { // Check for successful response
          this.rooms = this.rooms.filter(room => room.room_id !== roomId);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error deleting room:', error);
        return false;
      }
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

/* .table th, .table td {
  vertical-align: middle;
} */
</style>
