import axios from "axios";
//$ json-server --watch db.json --port 3004 (comando do bash para iniciar o json server)
const api = axios.create({
  baseURL: "http://localhost:3004",
});

export default api;