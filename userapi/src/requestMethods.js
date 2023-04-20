import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODZlNDI1MTBiYzA2NDI2YjQ2ZWZhMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDI0MzAzMCwiZXhwIjoxNjcwODQ3ODMwfQ.feoARyzoQ66D4Oqlx6z24kCYYCD6aDdy23uyxPIbVh0";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});