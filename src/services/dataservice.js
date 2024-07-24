import axios from 'axios';

const http = axios.create({
  baseURL: "http://localhost:5000/api/hotelms",
  headers: {
    "Content-type": "application/json"
  }
});

class DataService {


    async validateReferences(userId, roomId) {
        try {
          const userResponse = await axios.get(`/api/users/${userId}`);
          const roomResponse = await axios.get(`/api/rooms/${roomId}`);
          
          if (userResponse.status === 200 && roomResponse.status === 200) {
            return true;
          }
        } catch (error) {
          console.error('Validation failed:', error);
          return false;
        }
      }
    
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
      console.error('Error creating reservation:', error);
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
}

export default new DataService();
