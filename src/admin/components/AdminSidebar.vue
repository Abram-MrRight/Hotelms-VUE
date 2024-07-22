<template>
    <aside class="admin-sidebar">
      <div class="admin-profile">
        <img src="path/to/profile-icon.png" alt="Admin Profile" class="profile-icon" />
        <span class="profile-name">Admin Name</span>
      </div>
      <nav class="sidebar-nav">
        <ul>
          <li><router-link to="/admin/bookings">Manage Bookings</router-link></li>
          <li><router-link to="/admin/rooms">Manage Rooms</router-link></li>
          <li><router-link to="/admin/reservations">Manage Reservations</router-link></li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'AdminSidebar'
  }
  </script>
  
  <style scoped>
  .admin-sidebar {
    width: 250px;
    background-color: #333;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position:fixed;
    top: 0; /* Start below the AdminNavbar */
    height: calc(100vh - 50px); /* Fill the remaining height */
  }
  
  .admin-profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .profile-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .profile-name {
    font-size: 16px;
    font-weight: bold;
    color: white; /* Ensure the profile name is white */
  }
  
  .sidebar-nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar-nav li {
    margin-bottom: 10px;
  }
  
  .sidebar-nav a {
    text-decoration: none;
    color: white; /* Ensure the links are white */
    font-size: 14px;
  }
  </style>
  