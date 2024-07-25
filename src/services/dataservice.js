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
      const userResponse = await axios.get(`/users/${userId}`);
      const roomResponse = await axios.get(`/rooms/${roomId}`);

      if (userResponse.status === 200 && roomResponse.status === 200) {
        return true;
      }
    } catch (error) {
      console.error('Validation failed:', error);
      return false;
    }
  }

  async getAllRooms() {
    try {
      const url = '/rooms'; // Replace with your actual API endpoint (should be http://localhost:5000/api/hotelms/rooms)
      const response = await http.get(url);

      console.log('API request URL:', url);
      console.log('API response status:', response.status);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error; // Rethrow the error for handling in the component
    }
  }



  async getRoomById(id) {
    try {
      const response = await http.get(`/rooms/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching room:', error);
      throw error;
    }
  }

  async deleteRoom(id) {
    try {
      const response = await http.delete(`/rooms/${id}`);
      return response;
    } catch (error) {
      console.error('Error deleting room:', error);
      throw error;
    }
  }

  async updateRoom(id, data) {
    return http.put(`/rooms/${id}`, data);
  }

  async addRoom(data) {
    try {
      const response = await http.post('/rooms', data);
      return response;
    } catch (error) {
      console.error('Error adding room:', error);
      throw error;
    }
  }

  async createReservation(data) {
    try {
      const response = await http.post('/reservations', data);
      return response;
    } catch (error) {
      console.error('Error creating reservation:', error);
      throw error;
    }
  }

  async getAllReservations() {
    try {
      const response = await http.get('/reservations');
      return response.data;
    } catch (error) {
      console.error('Error fetching reservations:', error);
      throw error;
    }
  }

  async getReservationById(id) {
    try {
      const response = await http.get(`/reservations/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching reservation:', error);
      throw error;
    }
  }

  async updateReservation(id, data) {
    try {
      const response = await http.put(`/reservations/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating reservation:', error);
      throw error;
    }
  }

  async deleteReservation(id) {
    try {
      const response = await http.delete(`/reservations/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting reservation:', error);
      throw error;
    }
  }

  async checkRoomAvailability() {
    try {
      const response = await http.get('/availability');
      return response.data;
    } catch (error) {
      console.error('Error checking room availability:', error);
      throw error;
    }
  }

  async fetchDashboardData() {
    try {
      const response = await http.get('/analytics');
      return response.data;
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      throw error;
    }
  }
}

export default new DataService();
