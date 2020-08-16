import * as axios from "axios";
import { BASE_API } from "../config";

export const api: axios.AxiosInstance = axios.default.create({
  baseURL: BASE_API,
});
