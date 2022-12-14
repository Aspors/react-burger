import api from "../../http";
import {
  _LOG_OUT,
  _LOGIN,
  _REGISTER,
  _TOKEN,
} from "../../utils/consts/sevice-consts/Api-consts";

export default class AuthService {
  static async login({ email, password }: { email: string; password: string }) {
    return api.post(_LOGIN, { email, password });
  }

  static async register({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    console.log("service: ", `${_REGISTER} - register`);
    return api.post(_REGISTER, { name, email, password });
  }

  static async logout(refreshToken: string) {
    return api.post(_LOG_OUT, { token: refreshToken });
  }

  static async getCookie(refreshToken: string) {
    return api.post(_TOKEN, { token: refreshToken });
  }
}
