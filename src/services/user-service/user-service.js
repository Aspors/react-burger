import api from "../../http";
import { _USER } from "../../utils/consts/sevice-consts/Api-consts";

export default class UserService {
  static async getUser() {
    return api.get(_USER);
  }

  static async patchUser(name, email) {
    return api.patch(_USER, { name, email });
  }
}
