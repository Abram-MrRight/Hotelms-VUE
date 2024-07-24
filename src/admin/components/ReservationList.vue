<template>
  <div class="container-scroller d-flex">

    <!-- Include the Sidebar component -->
    <AdminSidebar />

    <div class="reservations-list-container">
    <form class="d-flex" role="search" @submit.prevent="searchReservations">
      <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <h1>All Reservations</h1>
    <div class="d-flex justify-content-end mb-2">
      <button @click="addReservation" class="btn btn-success">Add</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Reservation ID</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
          <th>Status</th>
          <th>User</th>
          <th>Room</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservation in reservations" :key="reservation.reservation_id">
          <td>{{ reservation.reservation_id }}</td>
          <td>{{ formatDate(reservation.check_in_date) }}</td>
          <td>{{ formatDate(reservation.check_out_date) }}</td>
          <td>{{ reservation.status }}</td>
          <td>{{ reservation.user ? reservation.user.username : 'N/A' }}</td>
          <td>{{ reservation.room ? `${reservation.room.number} (${reservation.room.type})` : 'N/A' }}</td>
          <td>
            <button @click="editReservation(reservation.reservation_id)" class="btn btn-primary btn-sm float-end">Edit</button>
            <button 
              @click="confirmDeleteReservation(reservation.reservation_id)"
              :disabled="deletingReservation === reservation.reservation_id"
              class="btn btn-danger btn-sm float-end"
            >
              Delete
            </button>
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
      reservations: [],
      searchQuery: '',
      deletingReservation: null // Track the ID of the reservation being deleted
    };
  },
  methods: {
    async fetchReservations() {
      try {
        const response = await DataService.getAllReservations();
        console.log('API Response:', response);
        this.reservations = response.data; // Adjusted for direct array response
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    async searchReservations() {
      try {
        const response = await DataService.getAllReservations(); 
        this.reservations = response.data.filter(reservation =>
          reservation.reservation_id.toString().includes(this.searchQuery) ||
          (reservation.user && reservation.user.username.includes(this.searchQuery)) 
        );
      } catch (error) {
        console.error('Error searching reservations:', error);
      }
    },
    addReservation() {
      this.$router.push({ path: '/add-reservation' });
    },
    async editReservation(reservationId) {
      this.$router.push({ path: '/edit-reservation', query: { id: reservationId } });
    },
    async confirmDeleteReservation(reservationId) {
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
          this.deletingReservation = reservationId; // Set the deleting state

          // Optimistic UI update
          const reservationsBeforeDelete = [...this.reservations];
          this.reservations = this.reservations.filter(reservation => reservation.reservation_id !== reservationId);

          try {
            const success = await this.deleteReservation(reservationId);
            if (!success) {
              // If deletion failed, revert the UI update
              this.reservations = reservationsBeforeDelete;
              Swal.fire('Error!', 'Failed to delete the reservation.', 'error');
            } else {
              Swal.fire('Deleted!', 'The reservation has been deleted.', 'success');
            }
          } catch (error) {
            console.error('Error deleting reservation:', error);
            // Revert the UI update in case of error
            this.reservations = reservationsBeforeDelete;
            Swal.fire('Error!', 'There was a problem deleting the reservation.', 'error');
          }

          this.deletingReservation = null; // Reset the deleting state
        }
      } catch (error) {
        console.error('Error confirming deletion:', error);
        Swal.fire('Error!', 'There was a problem with the deletion process.', 'error');
        this.deletingReservation = null; // Reset the deleting state in case of error
      }
    },
    async deleteReservation(reservationId) {
      try {
        const response = await DataService.deleteReservation(reservationId);
        return response.status === 200; // Return true if the deletion was successful
      } catch (error) {
        console.error('Error deleting reservation:', error);
        return false; // Return false if an error occurred
      }
    }
  },
  async mounted() {
    await this.fetchReservations();
  }
};
</script>

<style scoped>
.reservations-list-container {
  flex-grow: 1;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.table th, .table td {
  vertical-align: middle;
}

.btn {
  margin-right: 0.5rem;
}
</style>
