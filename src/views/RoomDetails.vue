<template>
  <section class="rooms">
    <h2>All Rooms</h2>
    <div class="room-cards">
      <div v-for="room in rooms" :key="room.id" class="room-card">
        <img :src="room.imageUrl" :alt="room.name">
        <h3>{{ room.name }}</h3>
        <p>{{ room.description }}</p>
        <p>Status: {{ room.available ? 'Available' : 'Not Available' }}</p>
      </div>
    </div>
    <button class="see-more-btn" @click="goBack">Back</button>
  </section>
</template>

<script>
import DataService from '../services/dataservice.js';

export default {
  name: 'RoomDetails',
  data() {
    return {
      rooms: []
    };
  },
  async created() {
    try {
      this.rooms = await DataService.getAllRooms();
    } catch (error) {
      console.error('Failed to fetch rooms:', error);
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
/* Use similar styling to the rooms section */
.rooms {
  padding: 50px 20px;
  text-align: center;
}

.room-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.room-card {
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  max-width: 300px;
  padding: 20px;
}

.room-card img {
  width: 100%;
}

.room-card h3 {
  margin-top: 10px;
}

.see-more-btn {
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #ff6b6b;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 20px;
}
</style>
