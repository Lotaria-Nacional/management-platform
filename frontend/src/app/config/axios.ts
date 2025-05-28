import axios from "axios"

export default axios.create({
  baseURL: "https://management-platform-dzsk.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
})
