<template>
    <div class="container-scroller">
      <!-- Include the Sidebar component -->
      <AdminSidebar />
      <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 grid-margin stretch-card" v-for="item in dashboardItems" :key="item.title">
                <div class="card">
                  <div class="card-body">
                    <h5>{{ item.title }}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                      <h2 class="font-weight-medium">{{ item.value }}</h2>
                      <i :class="item.iconClass"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h5>Occupancy Rates (Last 5 Days)</h5>
                    <ul>
                      <li v-for="rate in occupancyRates" :key="rate.day">{{ rate.day }}: {{ rate.occupancy_rate }}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h5>Total Reservations By Status</h5>
                    <ul>
                      <li v-for="status in totalReservationsByStatus" :key="status.status">{{ status.status || 'No Status' }}: {{ status.count }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
  </template>
  
  <script>
  import AdminSidebar from "@/admin/components/AdminSidebar.vue";
  import DataService from '../../services/dataservice';
  
  export default {
    components: {
      AdminSidebar
    },
    data() {
      return {
        dashboardItems: [
          { title: 'Total Users', value: 0, iconClass: 'mdi mdi-account-multiple-outline icon-lg text-primary' },
          { title: 'Total Rooms', value: 0, iconClass: 'mdi mdi-hotel icon-lg text-primary' },
          { title: 'Total Reservations', value: 0, iconClass: 'mdi mdi-calendar-check icon-lg text-primary' },
          { title: 'Confirmed Reservations', value: 0, iconClass: 'mdi mdi-check-circle-outline icon-lg text-primary' },
          { title: 'Available Rooms', value: 0, iconClass: 'mdi mdi-hotel icon-lg text-primary' },
          { title: 'Most Reserved Room Type', value: '', iconClass: 'mdi mdi-bed icon-lg text-primary' },
          { title: 'Total Single Rooms', value: 0, iconClass: 'mdi mdi-hotel icon-lg text-primary' },
          { title: 'Total Double Rooms', value: 0, iconClass: 'mdi mdi-hotel icon-lg text-primary' },
        ],
        occupancyRates: [],
        totalReservationsByStatus: [],
      };
    },
    created() {
      this.fetchDashboardData();
    },
    methods: {
      async fetchDashboardData() {
        try {
          const response = await DataService.fetchDashboardData();
          const data = response.data;
          this.dashboardItems[0].value = data.number_of_guests || 0;
          this.dashboardItems[1].value = data.total_rooms || 0;
          this.dashboardItems[2].value = data.number_of_reservations || 0;
          this.dashboardItems[3].value = data.total_booked_rooms || 0;
          this.dashboardItems[4].value = data.total_available_rooms || 0;
          this.dashboardItems[5].value = data.most_reserved_room_type || '';
          this.dashboardItems[6].value = data.total_single_rooms || 0;
          this.dashboardItems[7].value = data.total_double_rooms || 0;
          this.occupancyRates = data.occupancy_rates || [];
          this.totalReservationsByStatus = data.total_reservations_by_status || [];
        } catch (error) {
          console.error('Error fetching dashboard data:', error);
        }
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
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8); /* Black shadow */
    border: 2px solid #f0f0f0;
    transition: transform 0.2s, background-color 0.2s;
  }
  .card:hover {
    transform: translateY(-10px);
    background-color: #e0f7fa; /* Light blue background on hover */
  }
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #f9f9f9;
    padding: 20px;
  }
  .icon-lg {
    font-size: 3rem;
    color: #1e88e5;
  }
  h5 {
    color: #555;
    margin-bottom: 10px;
  }
  h2 {
    color: #333;
    margin: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
    color: #555;
  }
  </style>
  