<template>
  <div class="rooms-list-container">
    <button @click="addRoom" class="btn btn-success mb-3">Add Room</button>
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
            <button @click="editRoom(room.room_id)" class="btn btn-primary btn-sm">Edit</button>
            <button @click="deleteRoom(room.room_id)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DataService from '../../services/dataservice';

export default {
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
    async deleteRoom(roomId) {
      try {
        await DataService.deleteRoom(roomId);
        this.rooms = this.rooms.filter(room => room.room_id !== roomId);
      } catch (error) {
        console.error('Error deleting room:', error);
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.btn {
  margin-bottom: 1rem;
}

.table th, .table td {
  vertical-align: middle;
}
</style>
