import axios from "axios";

const baseURL = import.meta.env.REACT_APP_API_BASE_URL;

const api = axios.create({ baseURL: baseURL });

export default api;
