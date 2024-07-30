import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    withCredentials: true // 자격 증명을 할건지 말건지 설정
});

export default api;