<template>
    <div class="manage-rooms">
        <h1>Manage Rooms</h1>

        <!-- Room Form -->
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="room-number">Room Number</label>
                <input type="text" id="room-number" v-model="form.roomNumber" required />
            </div>
            <div class="form-group">
                <label for="room-type">Room Type</label>
                <input type="text" id="room-type" v-model="form.roomType" required />
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" id="price" v-model="form.price" required />
            </div>
            <div class="form-group">
                <label for="availability">Availability</label>
                <select id="availability" v-model="form.availability">
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                </select>
            </div>
            <button type="submit" class="btn">Add Room</button>
        </form>

        <!-- Rooms Table -->
        <table class="rooms-table">
            <thead>
                <tr>
                    <th>Room Number</th>
                    <th>Room Type</th>
                    <th>Price</th>
                    <th>Availability</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="room in rooms" :key="room.id">
                    <td>{{ room.roomNumber }}</td>
                    <td>{{ room.roomType }}</td>
                    <td>{{ room.price }}</td>
                    <td>{{ room.availability }}</td>
                    <td>
                        <button @click="editRoom(room)" class="btn edit">Edit</button>
                        <button @click="deleteRoom(room.id)" class="btn delete">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ManageRooms',
    data() {
        return {
            form: {
                roomNumber: '',
                roomType: '',
                price: '',
                availability: 'Available'
            },
            rooms: [],
            editIndex: null
        };
    },
    methods: {
        async fetchRooms() {
            try {
                const response = await axios.get('/api/rooms');
                this.rooms = response.data.rooms;
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        },
        async handleSubmit() {
            try {
                if (this.editIndex !== null) {
                    await axios.put(`/api/rooms/${this.rooms[this.editIndex].id}`, this.form);
                    this.rooms[this.editIndex] = { ...this.form };
                } else {
                    const response = await axios.post('/api/rooms', this.form);
                    this.rooms.push(response.data);
                }
                this.resetForm();
            } catch (error) {
                console.error('Error saving room:', error);
            }
        },
        editRoom(room) {
            this.editIndex = this.rooms.indexOf(room);
            this.form = { ...room };
        },
        async deleteRoom(id) {
            try {
                await axios.delete(`/api/rooms/${id}`);
                this.rooms = this.rooms.filter(room => room.id !== id);
            } catch (error) {
                console.error('Error deleting room:', error);
            }
        },
        resetForm() {
            this.form = {
                roomNumber: '',
                roomType: '',
                price: '',
                availability: 'Available'
            };
            this.editIndex = null;
        }
    },
    async mounted() {
        await this.fetchRooms();
    }
};
</script>

<style scoped>
.manage-rooms {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
}

input,
select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
}

.btn:hover {
    background-color: #0056b3;
}

.rooms-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
}

.rooms-table th,
.rooms-table td {
    padding: 0.75rem;
    border: 1px solid #ddd;
    text-align: left;
}

.rooms-table th {
    background-color: #f8f8f8;
}

.edit {
    background-color: #ffc107;
}

.edit:hover {
    background-color: #e0a800;
}

.delete {
    background-color: #dc3545;
}

.delete:hover {
    background-color: #c82333;
}
</style>