import axios from 'axios'

export const instance = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
        "Content-Type": "application/json"
    },
})

// "http://localhost:1337/api/uploads/Light_Mouse_G502_X_8f5a5b98eb.png"