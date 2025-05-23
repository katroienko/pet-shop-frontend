// import axios from "axios"

// export const backendInstance = axios.create({
//     baseURL: "http://localhost:3333"
// })

import axios from "axios";

const { VITE_API_URL } = import.meta.env;
console.log(VITE_API_URL);


export const backendInstance = axios.create({
    baseURL: VITE_API_URL
});

