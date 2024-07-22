<template>
    <header class="admin-navbar">
      <div class="navbar-center">
        <input type="text" placeholder="Search..." class="search-input" />
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AdminNavbar'
  }
  </script>
  
  <style scoped>
  .admin-navbar {
    position: fixed;
    top: 0;
    left: 250px; /* Adjust this to match the width of AdminSidebar */
    width: calc(100% - 250px); /* Adjust width to account for the sidebar */
    background-color: #333;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    z-index: 1000; /* Ensure it appears above the sidebar */
  }
  
  .search-input {
    padding: 5px;
    border: none;
    border-radius: 5px;
    width: 300px; /* Adjust the width as needed */
  }
  </style>
  