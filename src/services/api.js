import axios from "axios";

const api = axios.create({
  baseURL: "https://suap.ifrn.edu.br/api/",
});

export default api;