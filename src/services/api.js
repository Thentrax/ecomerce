import axios from "axios";

const baseURL = "http://localhost:5155/api";

class ApiService {
    async get(url, params){
        const response = await axios.get(`${baseURL}${url}`, { params });
        return response.data;
    };

    async post(url, data){
        const response = await axios.post(`${baseURL}${url}`, data);
        return response.data;
    };

    async put(url, data){
        const response = await axios.put(`${baseURL}${url}`, data);
        return response.data;
    };

    async delete(url){
        const response = await axios.delete(`${baseURL}${url}`);
        return response.data;
    };
}

export const ApiInstance = new ApiService();