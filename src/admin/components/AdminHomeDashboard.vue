<template>
    <div class="container-scroller">
      <AdminSidebar />
      <div class="container-fluid page-body-wrapper">
        <AdminNav />
        <div class="main-panel">
          
          <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h5>Hotel Activities</h5>
                    <ul>
                      <li>Check-in: {{ checkInActivities }}</li>
                      <li>Check-out: {{ checkOutActivities }}</li>
                      <li>New Reservations: {{ newReservations }}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h5>Total Revenue</h5>
                    <h2 class="font-weight-medium">${{ totalRevenue }}</h2>
                  </div>
                </div>
              </div>
              <div class="content-wrapper">
            <div class="row">
              
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h5>Advanced Calendar</h5>
                    <FullCalendarComponent :events="calendarEvents" />
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
  import AdminNav from './AdminNavBar.vue';
  import FullCalendarComponent from './FullCalendarComponent.vue';
  
  export default {
    components: {
      AdminSidebar,
      AdminNav,
      FullCalendarComponent
    },
    data() {
      return {
        checkInActivities: 0,
        checkOutActivities: 0,
        newReservations: 0,
        totalRevenue: 0,
        calendarEvents: [] // Add your calendar events here
      };
    },
    created() {
      this.fetchDashboardData();
    },
    methods: {
      fetchDashboardData() {
        // Fetch data from the API and update the state
        this.checkInActivities = 15; // Example data
        this.checkOutActivities = 10;
        this.newReservations = 5;
        this.totalRevenue = 15000; // Example revenue
        this.calendarEvents = [
          { title: 'Event 1', start: '2024-07-25' },
          { title: 'Event 2', start: '2024-07-26' }
        ];
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
    box-shadow: 0 trade;
     map: 0, 0, 0.1;
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
  