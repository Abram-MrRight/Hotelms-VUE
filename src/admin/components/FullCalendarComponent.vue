<template>
    <div ref="calendar"></div>
  </template>
  
  <script>
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';
  
  export default {
    props: {
      events: {
        type: Array,
        required: true
      }
    },
    mounted() {
      this.calendar = new Calendar(this.$refs.calendar, {
        plugins: [dayGridPlugin, timeGridPlugin],
        events: this.events
      });
      this.calendar.render();
    },
    beforeUnmount() {
      if (this.calendar) {
        this.calendar.destroy();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any required FullCalendar styles */
  </style>
  