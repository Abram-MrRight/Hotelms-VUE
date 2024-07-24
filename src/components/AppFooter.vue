<template>
  <footer class="footer">
    <div class="background-water"></div>
    <div class="footer-container">
      <div class="row">
        <div class="column">
          <img src="../assets/logo1.jpeg" alt="logo image">
          <p class="address">
            Hotel Pro<br />
            123 Hotel Street<br />
            City, Country
          </p>
        </div>
        <div class="column">
          <p class="heading">CONNECT WITH US</p>
          <div class="social-icons">
            <a href="#" class="footer-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="footer-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="footer-link"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="column">
          <p class="legal-text">
            Hotel Pro is your home away from home.<br />
            Your comfort is our priority.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <ul class="footer-links">
          <li><a href="#!" class="footer-link-item">Home</a></li>
          <li><a href="#!" class="footer-link-item">Booking</a></li>
          <li><a href="#!" class="footer-link-item">Rooms</a></li>
          <li><a href="#!" class="footer-link-item">Contact</a></li>
        </ul>
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} Hotel Pro. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      logo: require('../assets/logo1.jpeg')
    };
  },
};
</script>

<style scoped>
.footer {
  padding: 5% 2.5%;
  background: #f5f5f5;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.background-water {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/logo1.jpeg') no-repeat center center;
  background-size: cover;
  opacity: 0.1;
  z-index: -1;
}

.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 1;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px;
}

.column {
  flex: 1;
  margin: 10px;
}

.footer-link {
  color: #333;
  margin: 0 10px;
  font-size: 20px;
  text-decoration: none;
}

.footer-link:hover {
  color: green;
  transition: 200ms ease-in;
}

.heading {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.social-icons a {
  margin: 0 10px;
}

.social-icons i {
  font-size: 20px;
  color: #333;
}

.social-icons i:hover {
  color: green;
  transition: 200ms ease-in;
}

.address {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

.legal-text {
  font-size: 15px;
  line-height: 1.8;
  color: #333;
}

.footer-bottom {
  border-top: 1px solid #ddd;
  padding: 10px 20px;
  background-color: #30a5e9;
  text-align: center;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 10px 0;
  display: flex;
  justify-content: center;
}

.footer-link-item {
  color: #333;
  margin: 0 10px;
  text-decoration: none;
}

.footer-link-item:hover {
  text-decoration: underline;
}

.logo {
  max-width: 190px;
  height: auto;
}

.copyright {
  text-align: center;
  color: white;
  margin-top: 10px;
  font-size: 14px;
}
</style>
