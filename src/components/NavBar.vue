<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Hotel Pro</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Booking</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Rooms
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mx-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  };
 
 </script>
  
  <style scoped>
.navbar {
  box-shadow: 0 4px 8px -3px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-weight: bold;
  color: #007bff;
  font-size: 1.5rem;
}

.nav-link {
  color: #333;
  margin-right: 50px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #007bff;
}

.navbar-toggler {
  border: red;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%280, 123, 255, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.form-control {
  border: 1px solid #007bff;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #0056b3;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn-outline-success {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-success:hover {
  background-color: hsl(212, 68%, 5%);
  color: white;
  border-color: #007bff;
}
</style>
