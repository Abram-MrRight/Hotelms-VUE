<template>
  <div class="container">
    <div class="booking-details">
      <h2>Booking Details</h2>
      <div class="details">
        <div class="detail">
          <p><strong>Name:</strong> {{ name }}</p>
        </div>
        <div class="detail">
          <p><strong>Date:</strong> {{ date }}</p>
        </div>
        <div class="detail">
          <p><strong>Time:</strong> {{ time }}</p>
        </div>
        <div class="detail">
          <p><strong>Room:</strong> {{ room }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$route.params.name;
    },
    date() {
      return this.$route.params.date;
    },
    time() {
      return this.$route.params.time;
    },
    room() {
      return this.$route.params.room;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px; /* Adjust max-width as needed */
  margin: 0 auto;
  padding: 20px;
}

.booking-details {
  padding: 20px;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.booking-details h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--heading-color);
}

.details {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align details to the right */
}

.detail {
  width: 100%;
  max-width: 400px; /* Adjust max-width as needed */
  margin-bottom: 10px;
}

.detail p {
  font-size: 1rem;
  margin-bottom: 5px;
  color: var(--text-color);
}

/* Responsive CSS */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .booking-details {
    padding: 15px;
  }

  .booking-details h2 {
    font-size: 1.3rem;
  }

  .detail p {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 10px;
  }

  .booking-details {
    padding: 10px;
  }

  .booking-details h2 {
    font-size: 1.2rem;
  }

  .detail p {
    font-size: 0.8rem;
  }
}
</style>
