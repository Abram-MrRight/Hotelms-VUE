<template>
  <div class="manage-rooms container mt-5">
    <!-- Room Form -->
    <div>
      <h2 v-if="selectedRoom" class="mb-4">Edit Room {{ selectedRoom.number }}</h2>
      <form @submit.prevent="handleSubmit" class="row g-3">
        <div class="col-md-6">
          <label for="room-number" class="form-label">Room Number</label>
          <input type="text" class="form-control" id="room-number" v-model="form.number" required />
        </div>
        <div class="col-md-6">
          <label for="room-type" class="form-label">Room Type</label>
          <input type="text" class="form-control" id="room-type" v-model="form.type" required />
        </div>
        <div class="col-md-6">
          <label for="price" class="form-label">Price</label>
          <input type="number" class="form-control" id="price" v-model="form.price" required />
        </div>
        <div class="col-md-6">
          <label for="availability" class="form-label">Availability</label>
          <select id="availability" class="form-select" v-model="form.status">
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Save Changes</button>
          <button type="button" class="btn btn-secondary ms-2" @click="resetForm">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import DataService from '../../services/dataservice';

export default {
  name: 'ManageRooms',
  data() {
    return {
      form: {
        number: '',
        type: '',
        price: '',
        status: 'Available'
      },
      selectedRoom: null
    };
  },
  methods: {
    async fetchRoom() {
      const roomId = this.$route.query.id;
      if (roomId) {
        try {
          const response = await DataService.getRoomById(roomId);
          this.selectedRoom = response.data;
          this.form = { ...this.selectedRoom };
        } catch (error) {
          console.error('Error fetching room:', error);
        }
      }
    },
    async handleSubmit() {
      try {
        if (this.selectedRoom) {
          await DataService.updateRoom(this.selectedRoom.id, this.form);
          this.$router.push({ name: 'RoomList' }); // Navigate back to the room list or another appropriate page
        }
      } catch (error) {
        console.error('Error saving room:', error);
      }
    },
    resetForm() {
      this.form = {
        number: '',
        type: '',
        price: '',
        status: 'Available'
      };
      this.selectedRoom = null;
      this.$router.push({ name: 'RoomList' }); // Navigate back to the room list or another appropriate page
    }
  },
  async mounted() {
    await this.fetchRoom(); // Fetch room data if needed
  }
};
</script>

<style scoped>
.manage-rooms {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
}

.form-label {
  color: #555;
}

.btn {
  margin-top: 1rem;
}

.btn-secondary {
  margin-left: 1rem;
}
</style>
