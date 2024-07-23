<template>
  <aside :class="['admin-sidebar', { 'collapsed': isCollapsed }]">
    <button @click="toggleCollapse" class="collapse-toggle btn btn-primary">
      <i :class="isCollapsed ? 'bi bi-chevron-right' : 'bi bi-chevron-left'"></i>
    </button>
    <div class="admin-profile-card">
      <img src="path/to/profile-icon.png" alt="Admin Profile" class="profile-icon" />
      <div class="profile-details">
        <h3 class="profile-name">Admin Name</h3>
        <p class="profile-email">admin@example.com</p>
        <div class="profile-actions dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="profileActions" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-gear"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="profileActions">
            <li><a class="dropdown-item" @click="editProfile">Edit Profile</a></li>
            <li><a class="dropdown-item" @click="deleteProfile">Delete Profile</a></li>
            <li><a class="dropdown-item" @click="toggleModal">Close</a></li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="sidebar-nav">
      <ul class="nav flex-column">
        <li class="nav-item"><router-link class="nav-link" to="/admin/bookings">Manage Bookings</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/rooms">Manage Rooms</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/reservations">Manage Reservations</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/admin/users">Manage Users</router-link></li>
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
  width: 300px;
  background-color: #343a40;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  height: 100vh;
  color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s;
}

.admin-sidebar.collapsed {
  width: 80px;
}

.admin-profile-card {
  background-color: #495057;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.profile-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.profile-details {
  color: #f8f9fa;
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
}

.collapse-toggle {
  position: absolute;
  top: 10px;
  right: 10px;
}

.sidebar-nav ul {
  padding: 0;
}

.sidebar-nav .nav-item {
  margin-bottom: 10px;
}

.sidebar-nav .nav-link {
  color: #f8f9fa;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-nav .nav-link:hover {
  background-color: #495057;
  color: #ffffff;
}

.sidebar-nav .nav-link.router-link-exact-active {
  background-color: #007bff;
  color: #ffffff;
}
</style>
