import axios from "../config/axios";

const authApi = {};

authApi.register = (body) => axios.post("/auth/register", body);
authApi.login = (dataLogin) => axios.post("/auth/login", dataLogin);
authApi.loginAdmin = (dataLogin) => axios.post("/admin/login", dataLogin);
authApi.getMe = () => axios.get("/auth/me");
authApi.getHistory = () => axios.get("/request-repair/history");
authApi.getUserRepair = () => axios.get("/request-repair/history");
authApi.getAdminRepair = () => axios.get("/dashboard-repair/dashboard");
authApi.getUserRoom = () => axios.get("/units/userRoom");
authApi.deleteRepair = (rowId) =>
  axios.delete(`/request-repair/delete/${rowId}`);

export default authApi;
