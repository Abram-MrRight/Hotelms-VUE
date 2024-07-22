<template>
  <!-- navbar -->
  <navBar />
  <!-- Main content -->
  <div class="container mt-5">
    <!-- Your main content goes here -->
  </div>

  <!-- Footer component -->
  <AppFooter />
</template>

<script>
import AppFooter from '../components/AppFooter.vue';
import NavBar from '../components/NavBar.vue';


export default {
  name: 'HomeView',
  components: {
    AppFooter,
    NavBar,
  }
};
</script>

