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
        return http.get("/rooms");
    }

    // Retrieve a room by ID
    getRoomById(id) {
        return http.get(`/rooms/${id}`);
    }

    // Create a new room
    createRoom(data) {
        return http.post("/rooms", data);
    }

    // Update a room by ID
    updateRoom(id, data) {
        return http.put(`/rooms/${id}`, data);
    }

    // Delete a room by ID
    deleteRoom(id) {
        return http.delete(`/rooms/${id}`);
    }
}

export default new DataService();