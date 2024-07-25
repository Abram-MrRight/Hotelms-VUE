<!-- src/components/Sidebar.vue -->
<template>
  <nav class="sidebar sidebar-offcanvas bg-dark" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile border-bottom">
        <a href="#" class="nav-link flex-column">
          <div class="nav-profile-image">
            <img src="/assets/images/faces/face1.jpg" alt="profile" />
            <!--change to offline or busy as needed-->
          </div>
          <div class="nav-profile-text d-flex ml-0 mb-3 flex-column">
            <span class="font-weight-semibold mb-1 mt-2 text-center text-white font-bold">Atong Abraham</span>
            
          </div>
        </a>
      </li>
      <li class="nav-item pt-3">
        <a class="nav-link d-block text-white" href="#">
          <div class="small font-weight-light pt-1">Hotel Management System</div>
        </a>
        <form class="d-flex align-items-center" action="#">
          <div class="input-group">
            <div class="input-group-prepend">
              <i class="input-group-text border-0 mdi mdi-magnify "></i>
            </div>
            <input type="text" class="form-control border-0 text-white " placeholder="Search" />
          </div>
        </form>
      </li>
      
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/showAnalystics">
          <i class="mdi mdi-hotel menu-icon text-white"></i>
          <span class="menu-title font-weight-bold text-white">Dashboard</span>
        </router-link>
      </li>
      
     
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/showUsers">
          <i class="mdi mdi-account-multiple menu-icon text-white"></i>
          <span class="menu-title font-weight-bold text-white">Users</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link text-white" to="/showRooms">
          <i class="mdi mdi-hotel menu-icon text-white"></i>
          <span class="menu-title font-weight-bold text-white">Rooms</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/showReservations">
          <i class="mdi mdi-calendar-check menu-icon text-white"></i>
          <span class="menu-title font-weight-bold text-white">Reservations</span>
        </router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link text-white" to="/showAnalystics">
          <i class="mdi mdi-chart-bar menu-icon text-white"></i>
          <span class="menu-title font-weight-bold text-white">Analytics</span>
        </router-link>
      </li> -->
      
      <li class="nav-item">
        <a class="nav-link text-white" href="#">
          <i class="mdi mdi-bell menu-icon text-white"></i>
          <span class="menu-title font-weight-bold text-white">Notifications</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AdminSidebar"
};
</script>

<style scoped>
.sidebar {
  background-color: hwb(208 5% 28%); /* Dark background */
}

.nav-link {
  color: #ffffff; /* White text color */
}

.nav-link:hover {
  background-color: #a2e045; /* Slightly lighter background on hover */
}

.menu-icon {
  color: #ffffff; /* White icon color */
}

.font-weight-bold {
  font-weight: bold; /* Bold text */
}

.text-white {
  color: #ffffff; /* White text color */
}

.bg-dark {
  background-color: hsl(208, 7%, 42%); /* Dark background */
}

.form-control {
  color: #ffffff; /* White text color in the input */
}

.input-group-text {
  color: #ffffff; /* White icon color */
}
</style>
