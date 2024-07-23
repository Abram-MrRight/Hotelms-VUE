// initializes axios with HTTP base Url and headers.

import axios from "axios";

export default axios.create({
  // connecting to our local db
  baseURL: "http://localhost:5000",
  //baseURL: "http://46.101.198.244:7070",
  //baseURL: "http://46.101.198.244:7071",
  headers: {
    "Content-type": "application/json"
  }
});