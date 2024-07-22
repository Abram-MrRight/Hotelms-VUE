<template>
  <aside :class="['admin-sidebar', { 'collapsed': isCollapsed }]">
    <button @click="toggleCollapse" class="collapse-toggle">
      <img :src="isCollapsed ? 'path/to/expand-icon.png' : 'path/to/collapse-icon.png'" alt="Toggle Sidebar" />
    </button>
    <div class="admin-profile-card">
      <img src="path/to/profile-icon.png" alt="Admin Profile" class="profile-icon" />
      <div class="profile-details">
        <h3 class="profile-name">Admin Name</h3>
        <p class="profile-email">admin@example.com</p>
        <div class="profile-actions">
          <button @click="toggleModal" class="actions-icon">
            <img src="path/to/actions-icon.png" alt="Actions Icon" />
          </button>
          <div v-if="showModal" class="profile-popup">
            <button @click="editProfile" class="btn btn-primary">Edit Profile</button>
            <button @click="deleteProfile" class="btn btn-danger">Delete Profile</button>
            <button @click="toggleModal" class="btn btn-secondary">Close</button>
          </div>
        </div>
      </div>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li><router-link to="/admin/bookings">Manage Bookings</router-link></li>
        <li><router-link to="/admin/rooms">Manage Rooms</router-link></li>
        <li><router-link to="/admin/reservations">Manage Reservations</router-link></li>
        <li><router-link to="/admin/users">Manage Users</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'AdminSidebar',
  data() {
    return {
      showModal: false,
      isCollapsed: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    editProfile() {
      // Add your edit profile logic here
      console.log("Editing profile...");
      this.toggleModal();
    },
    deleteProfile() {
      // Add your delete profile logic here
      console.log("Deleting profile...");
      this.toggleModal();
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
</script>

<style scoped>
.admin-sidebar {
  width: 400px;
  background-color: #2c3e50;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  height: 100vh;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s;
}

.admin-sidebar.collapsed {
  width: 80px; /* Adjust based on your design */
}

.admin-profile-card {
  background-color: #34495e;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}

.profile-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid #ecf0f1;
}

.profile-details {
  color: #ecf0f1;
}

.profile-name {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px;
}

.profile-email {
  font-size: 14px;
  margin: 0 0 10px;
}

.profile-actions {
  position: relative;
  display: inline-block;
}

.actions-icon {
  background: none;
  border: none;
  cursor: pointer;
}

.actions-icon img {
  width: 24px;
  height: 24px;
}

.profile-popup {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%; /* Position below the profile details */
  right: 0; /* Align with the right edge of the profile card */
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 150px;
}

.profile-popup .btn {
  margin: 5px 0;
  border-radius: 5px;
  padding: 8px 10px;
  text-align: center;
}

.collapse-toggle {
  background: #e74c3c; /* Red background color for visibility */
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px; /* Position at the top of the sidebar */
  right: 10px; /* Position at the right of the sidebar */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20; /* Ensure it is above other content */
}

.collapse-toggle img {
  width: 20px;
  height: 20px;
}

.sidebar-nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.sidebar-nav li {
  margin-bottom: 15px;
}

.sidebar-nav a {
  text-decoration: none;
  color: #ecf0f1;
  font-size: 16px;
  display: block;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-nav a:hover {
  background-color: #34495e;
  color: #ffffff;
}

.sidebar-nav a.router-link-exact-active {
  background-color: #2980b9;
  color: #ffffff;
}
</style>
