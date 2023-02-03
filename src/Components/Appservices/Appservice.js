import Axios from "axios";
import { URL, SUB, URL2 } from "./API_URL";
import AuthHeader from "./auth-header";

const SUBURL = "subgroup";

const GetList = () => {
  return Axios.get(`${URL}`, {
    headers: AuthHeader(),
  });
};

const GetSub = (e, id) => {
  return Axios.get(`${SUB}/${id}/${e}`, {
    headers: AuthHeader(),
  });
};

const GetRatings = (e) => {
  return Axios.get(`${URL2}/${e}`, {
    headers: AuthHeader(),
  });
};

const GetDetail = (e, id) => {
  return Axios.get(`${URL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const Create = (e, data) => {
  return Axios.post(`${URL}/${e}`, data, {
    headers: AuthHeader(),
  });
};

const Login = async (username, password) => {
  return await Axios.post(`${URL}/token`, { username, password });
};

const Update = async (e, id, data) => {
  return await Axios.put(`${URL}/${e}/${id}`, data, {
    headers: AuthHeader(),
  });
};

const Delete = (e, id) => {
  return Axios.delete(`${URL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const AppService = {
  GetList,
  GetDetail,
  Create,
  Update,
  Delete,
  Login,
  GetSub,
  GetRatings,
};

export default AppService;
