import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from '../admin/views/AdminDashboard.vue';
import ManageBookings from '../admin/views/ManageBookings.vue';
import ManageRooms from '../admin/views/ManageRooms.vue';
import ManageReservations from '../admin/views/ManageReservations.vue';
import ManageUsers from '../admin/views/ManageUsers.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/About.vue';
import myHome from '../admin/views/myHome.vue';
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      {
        path: 'bookings',
        name: 'ManageBookings',
        component: ManageBookings
      },
      {
        path: 'rooms',
        name: 'ManageRooms',
        component: ManageRooms
      },
      {
        path: 'reservations',
        name: 'ManageReservations',
        component: ManageReservations
      },
      {
        path: 'users',
        name: 'ManageUsers',
        component: ManageUsers
      },
      
    ]
  },
  {
    path: '/myHome',
    name: 'myHome',
    component: myHome
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
