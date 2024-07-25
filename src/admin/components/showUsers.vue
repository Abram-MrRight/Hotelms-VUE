<template>
    <div class="container-scroller d-flex">
      <!-- Include the Sidebar component -->
      <AdminSidebar />
      
      <div class="users-list-container">
        <AdminNav />
        <br>
        <br>
        <br>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search Users" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <h1>All Users</h1>
        <div class="d-flex justify-content-end mb-1">
          <button @click="addUser" class="btn btn-success">Add User</button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.user_id">
              <td>{{ user.first_name }}</td>
              <td>{{ user.last_name }}</td>
              <td>{{ user.role }}</td>
              <td>
                <button @click="editUser(user.user_id)" class="btn btn-primary btn-sm float-end">Edit</button>
                <button @click="confirmDeleteUser(user.user_id)" class="btn btn-danger btn-sm float-end">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
import AdminSidebar from './AdminSidebar.vue'; 
import AdminNav from "./AdminNavBar.vue";
import DataService from '../../services/dataservice';
import Swal from 'sweetalert2';

export default {
  components: {
    AdminSidebar,
    AdminNav
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await DataService.getAllUsers();
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    addUser() {
      this.$router.push({ path: '/add-user' });
    },
    editUser(userId) {
      this.$router.push({ path: '/edit-user', query: { id: userId } });
    },
    async confirmDeleteUser(userId) {
      try {
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: 'This action cannot be undone.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
          const success = await this.deleteUser(userId);
          if (success) {
            Swal.fire(
              'Deleted!',
              'The user has been deleted.',
              'success'
            );
          } else {
            Swal.fire(
              'Error!',
              'Failed to delete the user.',
              'error'
            );
          }
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        Swal.fire(
          'Error!',
          'There was a problem deleting the user.',
          'error'
        );
      }
    },
    async deleteUser(userId) {
      try {
        // Assuming deleteUser API responds with success status
        const response = await DataService.deleteUser(userId);
        if (response.status === 200) { // Check for successful response
          this.users = this.users.filter(user => user.user_id !== userId);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        const errorMessage = error.response?.data?.error || error.message || 'Unknown error occurred';             
        console.error('Error deleting user:',errorMessage);
        this.toast.error(`Error deleting user: ${errorMessage}`);
        return false;
      }
    }
  },
  async mounted() {
    await this.fetchUsers();
  }
};
</script>
 
<style scoped>
.users-list-container {
  flex-grow: 1;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.btn {
  margin-bottom: 1rem;
}

.table th, .table td {
  vertical-align: middle;
}
</style>
