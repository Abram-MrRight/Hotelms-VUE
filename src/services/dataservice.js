import axios from 'axios';

const http = axios.create({
  baseURL: "http://localhost:5000/api/hotelms",
  headers: {
    "Content-type": "application/json"
  }
});

class DataService {

    
  // Retrieve all rooms
  getAllRooms() {
    return http.get("/fetchRooms");
  }
  // Get room by ID
  async getRoomById(id) {
    try {
      const response = await http.get(`/getRoom/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching room:', error);
      throw error;
    }
  }
  
  // Delete room by ID
  async deleteRoom(id) {
    try {
      const response = await http.delete(`/deleteRoom/${id}`);
      return response;
    } catch (error) {
      console.error('Error deleting room:', error);
      throw error;
    } 
  }
  
  
  async updateRoom(id, data) {
    return http.put(`${http.defaults.baseURL}/updateRoom/${id}`, data);
  }
  
  // Add a new room
  async addRoom(data) {
    try {
      const response = await http.post('/add', data); // Endpoint updated to '/add'
      return response;
    } catch (error) {
      console.error('Error adding room:', error);
      throw error;
    }
  }


  // Reservation-related methods
  async createReservation(data) {
    try {
      const response = await http.post('/creareReservations', data);
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
      throw error;
    }
  }

  async getAllReservations() {
    try {
      const response = await http.get('/getReservations');
      return response; // Ensure this matches the actual API response
    } catch (error) {
      console.error('Error fetching reservations:', error);
      throw error;
    }
  }

  async getReservationById(id) {
    try {
      const response = await http.get(`/getReservations/${id}`);
      return response;
    } catch (error) {
      console.error('Error fetching reservation:', error);
      throw error;
    }
  }

  async updateReservation(id, data) {
    try {
      const response = await http.put(`/updateReservations/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error updating reservation:', error);
      throw error;
    }
  }

  async deleteReservation(id) {
    try {
      const response = await http.delete(`/deleteReservations/${id}`);
      return response;
    } catch (error) {
      console.error('Error deleting reservation:', error);
      throw error;
    }
  }

  async checkRoomAvailability() {
    try {
      const response = await http.get('/checkAvailability');
      return response;
    } catch (error) {
      console.error('Error checking room availability:', error);
      throw error;
    }
  }

  async fetchDashboardData() {
    try {
      const response = await http.get('/analytics');
      return response; // Ensure this matches the actual API response
    } catch (error) {
      console.error('Error fetching analystics data:', error);
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const response = await http.get('/users');
      return response; 
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
  // Add a new user
  async addUser(data) {
    try {
      const response = await http.post('/addUser', data); // Endpoint updated to '/add'
      return response;
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  }
   // Delete room by ID
   async deleteUser(id) {
    try {
      const response = await http.delete(`/deleteUsers/${id}`);
      return response;
    } catch (error) {
      console.error('Error deleting room:', error);
      throw error;
    } 
  }
  // Register admin
  async registerAdmin(data) {
    try {
      const response = await http.post('/register', data);
      return response;
    } catch (error) {
      console.error('Error registering admin:', error);
      throw error;
    }
  }

  // Login admin
  async loginAdmin(data) {
    try {
      const response = await http.post('/login', data);
      return response;
    } catch (error) {
      console.error('Error logging in admin:', error);
      throw error;
    }
  }
}

export default new DataService();
