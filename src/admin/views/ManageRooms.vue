<template>
  <div class="manage-rooms">
    <h1>Manage Rooms</h1>

    <!-- Rooms List -->
    <ul class="rooms-list">
      <li v-for="room in rooms" :key="room.id" @click="selectRoom(room)">
        Room {{ room.number }} - {{ room.type }} - ${{ room.price }} - {{ room.status }}
      </li>
    </ul>

    <!-- Room Form -->
    <div>
      <h2 v-if="selectedRoom">Edit Room {{ selectedRoom.number }}</h2>
      <h2 v-else>Create New Room</h2>
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
          <label for="availability">Availability</label>
          <select id="availability" v-model="form.status">
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>
        <button type="button" class="btn" @click="handleSubmit">{{ selectedRoom ? 'Save Changes' : 'Create Room'
          }}</button>
        <button type="button" class="btn cancel" @click="resetForm">Cancel</button>
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
      rooms: [],
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
    async fetchRooms() {
      try {
        const response = await DataService.getAllRooms();
        this.rooms = response.data.rooms;
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    },
    selectRoom(room) {
      this.selectedRoom = room;
      this.form = { ...room };
    },
    async handleSubmit() {
      try {
        if (this.selectedRoom) {
          await DataService.updateRoom(this.selectedRoom.id, this.form);
          const index = this.rooms.findIndex(room => room.id === this.selectedRoom.id);
          if (index !== -1) {
            this.rooms[index] = { ...this.form, id: this.selectedRoom.id }; // Ensure id is preserved
          }
        } else {
          const response = await DataService.createRoom(this.form);
          this.rooms.push(response.data);
        }
        this.resetForm();
      } catch (error) {
        console.error('Error saving room:', error);
      }
    },
    async deleteRoom(id) {
      try {
        await DataService.deleteRoom(id);
        this.rooms = this.rooms.filter(room => room.id !== id);
      } catch (error) {
        console.error('Error deleting room:', error);
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
    }
  },
  async mounted() {
    await this.fetchRooms();
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

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

.rooms-list {
  list-style: none;
  padding: 0;
}

.rooms-list li {
  padding: 1rem;
  background: #f8f8f8;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.rooms-list li:hover {
  background: #e0e0e0;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
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

.cancel {
  background-color: #6c757d;
}

.cancel:hover {
  background-color: #5a6268;
}
</style>
