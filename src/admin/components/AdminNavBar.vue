<template>
  <div class="navbar" >
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="collapse navbar-collapse">
        <form class="form-inline ml-auto search-form bg-light">
          <input class="form-control mr-sm-10 " type="search" placeholder="Search..." aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-1" type="submit">Search</button>
        </form>
        <div class="dropdown ml-auto">
          <button class="btn btn-secondary dropdown-toggle profile-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="mdi mdi-account-circle icon-lg"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" @click="viewProfile">View Profile</a>
            <a class="dropdown-item" href="#" @click="editProfile">Edit Profile</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="logout">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
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
    logout() {
      // Implement logout logic here
      console.log('Logout clicked');
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
  background-color: #484444
}
.navbar-brand {
  color: hsl(0, 15%, 10%);
  font-weight: bold;
}
.navbar-nav .nav-link {
  color: #ffffff;
}
.search-form {
  margin-right: 5rem;
  background-color: rgb(159, 152, 152);
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
</style>
