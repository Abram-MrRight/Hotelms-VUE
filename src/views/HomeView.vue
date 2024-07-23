<template>
  <!-- Use the NavBar component -->
  <NavBar />
  
  <!-- Other content of HomeView -->
  
  <!-- Use the AppFooter component -->
   <h1>Home</h1>
  <AppFooter />
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    AppFooter,
    NavBar
  }
};
</script>
