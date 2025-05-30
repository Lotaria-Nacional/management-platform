import axios from "axios"

export default axios.create({
  // baseURL: import.meta.env.VITE_APP_API,
  baseURL: "https://management-platform-dzsk.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
})
