import axios from "axios"

export default axios.create({
  // baseURL: "https://management-platform-dzsk.onrender.com/api",
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
})
