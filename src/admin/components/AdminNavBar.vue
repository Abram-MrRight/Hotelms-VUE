<template>
  <div class="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <div class="navbar-header mx-auto">
          <h1 class="title text-white font-bold">Hotel Pro!</h1>
        </div>
        <div class="collapse navbar-collapse">
          <div class="dropdown ml-auto">
            <button class="btn btn-secondary dropdown-toggle profile-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="mdi mdi-account-circle icon-lg"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#" @click="viewProfile">View Profile</a>
              <a class="dropdown-item" href="#" @click="editProfile">Edit Profile</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item logout-item" href="#" @click="confirmLogout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: "AdminNav",
  methods: {
    viewProfile() {
      // Implement view profile logic here
      console.log('View Profile clicked');
    },
    editProfile() {
      // Implement edit profile logic here
      console.log('Edit Profile clicked');
    },
    async confirmLogout() {
      try {
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: 'You will be logged out.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, log me out!'
        });

        if (result.isConfirmed) {
          this.logout();
          Swal.fire(
            'Logged out!',
            'You have been logged out.',
            'success'
          );
        }
      } catch (error) {
        console.error('Error during logout:', error);
        Swal.fire(
          'Error!',
          'There was a problem logging out.',
          'error'
        );
      }
    },
    logout() {
      // Clear stored user data, e.g., localStorage, Vuex store, etc.
      localStorage.removeItem('authToken'); // Example of removing token from localStorage

      // Redirect to the login page
      this.$router.push('/admin-login');
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  z-index: 1000;
  background-color: #484444;
}
.navbar-brand {
  color: hsl(0, 15%, 10%);
  font-weight: bold;
}
.navbar-nav .nav-link {
  color: #ffffff;
}
.profile-btn {
  border: none;
  margin-right: 1rem;
  margin-top: 1rem;
  background: #63d56c;
  color: hsl(0, 7%, 33%);
  padding: 5px;
}
.profile-btn .icon-lg {
  font-size: 3rem;
  color: #ffffff;
}
.dropdown-menu {
  right: 0;
  left: auto;
}
.dropdown-item {
  color: #333;
}
.dropdown-item:hover {
  background-color: hsl(212, 90%, 4%);
}
.logout-item {
  background-color: red;
  color: white;
}
.logout-item:hover {
  background-color: darkred;
}
.title {
  text-align: center;
  margin-left: 60rem
}
</style>
