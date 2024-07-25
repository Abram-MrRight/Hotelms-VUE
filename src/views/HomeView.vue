<template>
  <div>
    <!-- Use the NavBar component -->
    <NavBar />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Luxury Stay</h1>
        <p>Experience the finest hospitality and luxurious comfort</p>
        <RouterLink to="/booking-details">
          <button class="book-now-btn">Book Now</button>
        </RouterLink>
      </div>
    </section>

    <!-- Room Showcase Section -->
    <section class="rooms">
      <h2>Our Rooms</h2>
      <div class="room-cards">
        <div class="room-card">
          <img src="../assets/room1.jpeg" alt="Deluxe Room">
          <h3>Deluxe Room</h3>
          <p>Spacious room with a king-sized bed and modern amenities</p>
        </div>
        <div class="room-card">
          <img src="../assets/room2.jpeg" alt="Suite">
          <h3>Suite</h3>
          <p>Luxurious suite with separate living area and panoramic views</p>
        </div>
      </div>
      <RouterLink to="/room-details">
        <button class="see-more-btn">See More</button>
      </RouterLink>

    </section>

    <!-- Amenities Section -->
    <section class="amenities">
      <h2>Our Amenities</h2>
      <div class="amenity-list">
        <div class="amenity-item">
          <img src="../assets/spa1.jpeg" alt="Spa">
          <h3>Spa & Wellness</h3>
        </div>
        <div class="amenity-item">
          <img src="../assets/restaurant1.jpeg" alt="Restaurant">
          <h3>Restaurant</h3>
        </div>
        <div class="amenity-item">
          <img src="../assets/pool1.jpeg" alt="Swimming Pool">
          <h3>Swimming Pool</h3>
        </div>
        <div class="amenity-item">
          <img src="../assets/gym1.jpeg" alt="Gym">
          <h3>Fitness Center</h3>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <h2>What Our Guests Say</h2>
      <div class="testimonial-cards">
        <div class="testimonial-card">
          <p>"Absolutely amazing experience! The staff was friendly and the rooms were superb."</p>
          <h4>- John Doe</h4>
        </div>
        <div class="testimonial-card">
          <p>"The best hotel I've ever stayed at. Great amenities and wonderful food."</p>
          <h4>- Jane Smith</h4>
        </div>
        <div class="testimonial-card">
          <p>"A perfect place for a relaxing getaway. Highly recommended!"</p>
          <h4>- Michael Brown</h4>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta">
      <h2>Ready to Experience Luxury?</h2>
      <RouterLink to="/booking-details">
        <button class="book-now-btn">Book your stay with us</button>
      </RouterLink>
    </section>

    <!-- Use the AppFooter component -->
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import NavBar from '@/components/NavBar.vue';


export default {
  name: 'HomeView',
  components: {
    AppFooter,
    NavBar
  },
  methods: {

    goToRoomsPage() {
      this.$router.push({ name: '/booking-details' });
    }
  }
};
</script>

<style scoped>
/* Hero Section */
.hero {
  background-image: url('../assets/hero.jpeg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3em;
}

.hero-content p {
  font-size: 1.2em;
  margin: 20px 0;
}

.book-now-btn {
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #ff6b6b;
  border: none;
  color: white;
  cursor: pointer;
}

/* Rooms Section */
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

/* Amenities Section */
.amenities {
  padding: 50px 20px;
  background-color: #f8f8f8;
  text-align: center;
}

.amenity-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.amenity-item {
  margin: 20px;
  text-align: center;
}

.amenity-item img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

/* Testimonials Section */
.testimonials {
  padding: 50px 20px;
  text-align: center;
}

.testimonial-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.testimonial-card {
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  max-width: 300px;
  padding: 20px;
}

.testimonial-card p {
  font-style: italic;
}

.testimonial-card h4 {
  margin-top: 10px;
}

/* Call to Action Section */
.cta {
  background-color: #ff6b6b;
  color: white;
  text-align: center;
  padding: 50px 20px;
}

.cta h2 {
  margin-bottom: 20px;
}

.book-now-btn {
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #ff6b6b;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
