<template>
  <div class="container">
    <h2>Available Rooms</h2>
    <button @click="showAddRoomForm = true">Add Room</button>
    <ul>
      <li v-for="room in rooms" :key="room.id" class="room-item">
        <div class="room-details">
          <p><strong>Room Number:</strong> {{ room.id }}</p>
          <p><strong>Name:</strong> {{ room.name }}</p>
          <p><strong>Capacity:</strong> {{ room.capacity }} persons</p>
        </div>
        <div class="room-actions">
          <button @click="editRoom(room)">Edit</button>
          <button @click="confirmDeleteRoom(room.id)">Delete</button>
        </div>
      </li>
    </ul>

    <!-- Add/Edit Room Form -->
    <div v-if="showAddRoomForm || roomToEdit" class="form-container">
      <h3>{{ roomToEdit ? 'Edit Room' : 'Add Room' }}</h3>
      <form @submit.prevent="saveRoom">
        <div>
          <label for="name">Room Name:</label>
          <input type="text" v-model="currentRoom.name" required />
        </div>
        <div>
          <label for="capacity">Capacity:</label>
          <input type="number" v-model="currentRoom.capacity" required />
        </div>
        <button type="submit">{{ roomToEdit ? 'Update' : 'Add' }} Room</button>
        <button type="button" @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        { id: 1, name: 'Room A', capacity: 10 },
        { id: 2, name: 'Room B', capacity: 20 },
        { id: 3, name: 'Room C', capacity: 5 },
      ],
      showAddRoomForm: false,
      roomToEdit: null,
      currentRoom: { id: null, name: '', capacity: 0 },
    };
  },
  methods: {
    addRoom() {
      const newId = this.rooms.length ? Math.max(...this.rooms.map(r => r.id)) + 1 : 1;
      this.rooms.push({ ...this.currentRoom, id: newId });
      this.currentRoom = { id: null, name: '', capacity: 0 };
      this.showAddRoomForm = false;
    },
    editRoom(room) {
      this.roomToEdit = room;
      this.currentRoom = { ...room };
      this.showAddRoomForm = true;
    },
    saveRoom() {
      if (this.roomToEdit) {
        const index = this.rooms.findIndex(r => r.id === this.roomToEdit.id);
        if (index !== -1) {
          this.rooms.splice(index, 1, this.currentRoom);
        }
        this.roomToEdit = null;
      } else {
        this.addRoom();
      }
      this.currentRoom = { id: null, name: '', capacity: 0 };
      this.showAddRoomForm = false;
    },
    cancelEdit() {
      this.roomToEdit = null;
      this.currentRoom = { id: null, name: '', capacity: 0 };
      this.showAddRoomForm = false;
    },
    confirmDeleteRoom(roomId) {
      if (confirm("Are you sure you want to delete this room?")) {
        this.deleteRoom(roomId);
      }
    },
    deleteRoom(id) {
      this.rooms = this.rooms.filter(room => room.id !== id);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.room-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
}

.room-details {
  flex: 1;
}

.room-actions {
  flex-shrink: 0;
  margin-left: 10px;
}

button {
  padding: 6px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.form-container {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-container h3 {
  margin-bottom: 10px;
}

.form-container form {
  display: flex;
  flex-direction: column;
}

.form-container form div {
  margin-bottom: 10px;
}

.form-container form label {
  font-weight: bold;
}

.form-container form input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-container form button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-container form button[type="button"] {
  background-color: #6c757d;
  margin-left: 10px;
}

.form-container form button:hover {
  background-color: #0056b3;
}

/* Responsive CSS */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .room-item {
    flex-direction: column;
  }

  .room-actions {
    margin-left: 0;
    margin-top: 10px;
  }

  button {
    padding: 5px 10px;
    font-size: 0.9rem;
  }

  .form-container {
    padding: 10px;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 10px;
  }

  button {
    padding: 4px 8px;
    font-size: 0.8rem;
  }

  .form-container {
    padding: 8px;
  }

  .form-container form input {
    padding: 6px;
  }
}
</style>
