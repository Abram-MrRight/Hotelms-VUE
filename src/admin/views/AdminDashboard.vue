<template>
    <div class="admin-dashboard">
      <AdminSidebar />
      <div class="admin-body">
        <!-- <AdminNavbar /> -->
        <div class="admin-content">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import AdminNavbar from '@/admin/components/AdminNavBar.vue';
  import AdminSidebar from '@/admin/components/AdminSidebar.vue';
  
  export default {
    name: 'AdminDashboard',
    components: {
      // AdminNavbar,
      AdminSidebar
    }
  }
  </script>
  
  <style scoped>
  .admin-dashboard {
    display: flex;
    height: 100vh;
  }
  
  
  
  .admin-body {
    margin-left: 250px; /* Space for the AdminSidebar */
    display: flex;
    flex-direction: column;
    width: calc(100% - 250px); /* Adjust width to account for sidebar */
  }
  
  
  .admin-content {
    padding: 20px;
    margin-top: 50px; /* Space for AdminNavbar */
    height: calc(100vh - 50px); /* Fill the remaining height */
    overflow-y: auto; /* Handle overflow */
  }
  </style>
  