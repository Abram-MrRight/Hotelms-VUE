import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from '../admin/views/AdminDashboard.vue';
import ManageBookings from '../admin/views/ManageBookings.vue';
import ManageReservations from '../admin/views/ManageReservations.vue';
import ManageUsers from '../admin/views/ManageUsers.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/About.vue';
import myHome from '../admin/views/myHome.vue';
import ShowALRooms from '../admin/components/ShowRooms.vue';
import ManageRooms from '../admin/components/ManageRooms.vue';
import AddRoom from '../admin/components/AddRoom.vue';
import ReservationList from '../admin/components/ReservationList.vue';
import AddReservation from '../admin/components/AddReservation.vue';
import AdminHomeDashboard from '../admin/components/AdminHomeDashboard.vue';
import ShowAnalystics from '../admin/components/AnalysticsPage.vue';


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
        path: '/bookings',
        name: 'ManageBookings',
        component: ManageBookings
      },
     
      {
        path: '/reservations',
        name: 'ManageReservations',
        component: ManageReservations
      },
      {
        path: '/users',
        name: 'ManageUsers',
        component: ManageUsers
      },
      
    ]
  },
  {
    path: '/myHome',
    name: 'myHome',
    component: myHome
  },
  {
    path: '/rooms',
    name: 'ManageRooms',
    component: ManageRooms
  },
  {
    path: '/showRooms',
    name: 'RoomList',
    component: ShowALRooms
  },
  {
    path: '/add-room',
    name: 'AddRoom',
    component: AddRoom
  },
  {
    path: '/showReservations',
    name: 'ReservationList',
    component: ReservationList
  },
  {
    path: '/add-reservation',
    name: 'AddReservation',
    component: AddReservation
  },
  {
    path: '/homeDashboard',
    name: 'AdminHomeDashboard',
    component: AdminHomeDashboard
  },
  {
    path: '/showAnalystics',
    name: 'ShowAnalystics',
    component: ShowAnalystics
  },

  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
