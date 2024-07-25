<template>
    <div class="container-scroller">
      <AdminSidebar />
      <div class="container-fluid page-body-wrapper">
        <AdminNav />
        <div class="main-panel">
          <!-- Larger Card for Metrics -->
          <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body larger-card">
                <h5 class="card-title">Hotel Overview</h5>
                <div class="row">
                  <div class="col-lg-3 col-md-6 stretch-card">
                    <div class="card smaller-card">
                      <div class="card-body">
                        <h6>Total Revenue</h6>
                        <h3>${{ totalRevenue }}</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 stretch-card">
                    <div class="card smaller-card">
                      <div class="card-body">
                        <h6>Number of Workers</h6>
                        <h3>{{ numberOfWorkers }}</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 stretch-card">
                    <div class="card smaller-card">
                      <div class="card-body">
                        <h6>Departments & Heads</h6>
                        <ul>
                          <li v-for="department in departments" :key="department.name">
                            {{ department.name }} - {{ department.head }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 stretch-card">
                    <div class="card smaller-card">
                      <div class="card-body">
                        <h6>Hotel Activities</h6>
                        <ul>
                          <li>Check-in: {{ checkInActivities }}</li>
                          <li>Check-out: {{ checkOutActivities }}</li>
                          <li>New Reservations: {{ newReservations }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Calendar Section -->
          <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h5>Advanced Calendar</h5>
                <FullCalendarComponent :events="calendarEvents" class="full-calendar" />
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
        numberOfWorkers: 0,
        departments: [], // Add your department data here
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
        this.numberOfWorkers = 100; // Example number of workers
        this.departments = [
          { name: 'Front Desk', head: 'John Doe' },
          { name: 'Housekeeping', head: 'Jane Smith' }
        ]; // Example departments and heads
        this.calendarEvents = [
          { title: 'Event 1', start: '2024-07-25' },
          { title: 'Event 2', start: '2024-07-26' }
        ];
      }
    }
  };
  </script>
  
  <style scoped>
  .container-scroller {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .main-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  
  .larger-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .card-title {
    margin-bottom: 20px;
  }
  
  .smaller-card {
    margin-bottom: 20px;
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
  
  .full-calendar {
    width: 100%;
    height: 500px; /* Adjust this as needed */
  }
  
  .icon-lg {
    font-size: 3rem;
  }
  </style>
  