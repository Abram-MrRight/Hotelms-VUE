<template>
    <div class="container-scroller">
      <!-- Include the Sidebar component -->
      <AdminSidebar />
  
      <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h5>Total Users</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <h2 class="font-weight-medium">{{ totalUsers }}</h2>
                    <i class="mdi mdi-account-multiple-outline icon-lg text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h5>Total Rooms</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <h2 class="font-weight-medium">{{ totalRooms }}</h2>
                    <i class="mdi mdi-hotel icon-lg text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h5>Total Reservations</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <h2 class="font-weight-medium">{{ totalReservations }}</h2>
                    <i class="mdi mdi-calendar-check icon-lg text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h5>Confirmed Reservations</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <h2 class="font-weight-medium">{{ confirmedReservations }}</h2>
                    <i class="mdi mdi-check-circle-outline icon-lg text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h5>Available Rooms</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <h2 class="font-weight-medium">{{ availableRooms }}</h2>
                    <i class="mdi mdi-hotel icon-lg text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- main-panel ends -->
    </div>
    </div>
    <!-- container-scroller -->
  </template>
  
  <script>
import AdminSidebar from './AdminSidebar.vue'; 
  
  export default {
    components: {
      AdminSidebar
    },
    data() {
      return {
        totalUsers: 0,
        totalRooms: 0,
        totalReservations: 0,
        confirmedReservations: 0,
        availableRooms: 0
      };
    },
    created() {
      this.fetchDashboardData();
    },
    methods: {
      fetchDashboardData() {
        // Fetch data from the API and update the state
        this.totalUsers = 100; // Example data
        this.totalRooms = 50;
        this.totalReservations = 30;
        this.confirmedReservations = 25;
        this.availableRooms = 20;
      }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    z-index: 1000;
  }
  .card {
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .icon-lg {
    font-size: 3rem;
  }
  </style>
  