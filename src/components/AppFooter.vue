<template>
  <footer class="footer bg-light text-center text-lg-start">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">Hotel Pro</h5>
          <p>
            Your comfort is our priority. Enjoy the best services and amenities in our hotel.
          </p>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">Home</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Booking</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Rooms</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Contact</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Contact</h5>
          <ul class="list-unstyled mb-0">
            <li>
              <p class="text-dark mb-0">123 Hotel Street</p>
            </li>
            <li>
              <p class="text-dark mb-0">City, Country</p>
            </li>
            <li>
              <p class="text-dark mb-0">+1 234 567 890</p>
            </li>
            <li>
              <p class="text-dark mb-0">email@example.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2024 Hotel Pro. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -4px 8px -3px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  padding: 20px 0;
}

.footer .text-uppercase {
  text-transform: uppercase;
}

.footer .text-dark {
  color: #333;
  transition: color 0.3s;
}

.footer .text-dark:hover {
  color: #007bff;
}

.footer .p-3 {
  padding: 1rem;
}
</style>
