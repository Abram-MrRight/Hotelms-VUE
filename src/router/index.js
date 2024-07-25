import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from '../admin/views/AdminDashboard.vue';
import ManageBookings from '../admin/views/ManageBookings.vue';
import ManageReservations from '../admin/views/ManageReservations.vue';
import ManageUsers from '../admin/views/ManageUsers.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/About.vue';
import myHome from '../admin/views/myHome.vue';

import RoomList from '../components/RoomList.vue';
import BookingForm from '../components/BookingForm.vue';
import BookingDetails from '../components/BookingDetails.vue';

import RoomDetails from '../views/RoomDetails.vue';
import ManageRooms from '../admin/components/ManageRooms.vue';
import AddRoom from '../admin/components/AddRoom.vue';
import ReservationList from '../admin/components/ReservationList.vue';
import AddReservation from '../admin/components/AddReservation.vue';
import AdminHomeDashboard from '../admin/components/AdminHomeDashboard.vue';
import ShowAnalystics from '../admin/components/AnalysticsPage.vue';
import ShowUsers from '../admin/components/showUsers.vue';
import AddUser from '../admin/components/AddUser.vue';
import RegisterAdmin from '../admin/views/RegisterAdmin.vue';
import LoginAdmin from '../admin/views/AdminDashboard.vue';

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
    path: '/room-details',
    name: 'RoomDetails',
    component: RoomDetails
  },

  {
    path: '/',
    component: RoomList
  },
  {
    path: '/book/:roomId',
    name: 'bookingForm',
    component: BookingForm
  },
  {
    path: '/booking-details',
    name: 'bookingDetails',
    component: BookingDetails
  },
  {
    path: '/edit-room/:roomId',
    name: 'editRoom',
    component: RoomList
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

<<<<<<< HEAD


=======
  {
    path: '/showUsers',
    name: 'ShowUsers',
    component: ShowUsers
  },

  {
    path: '/add-user',
    name: 'AddUser',
    component: AddUser
  },

  {
    path: '/register',
    name: 'RegiisterAdmin',
    component: RegisterAdmin
  },
  {
    path: '/admin-login',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
  
>>>>>>> 648f5395bba3f77f82a10e404e59a4a3db89c397

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;





