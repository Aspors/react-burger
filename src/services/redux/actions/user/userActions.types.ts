import {
  LOGOUT,
  SET_AUTH_CHECKED,
  USER_FAILED,
  USER_REQUEST,
  USER_SUCCESS,
} from "./userActions";
import { TUser } from "../../../../utils/types/common.types";

interface IUSER_REQUEST {
  readonly type: typeof USER_REQUEST;
}

interface IUSER_SUCCESS {
  readonly type: typeof USER_SUCCESS;
  readonly payload: { user: TUser[] };
}

interface IUSER_FAILED {
  readonly type: typeof USER_FAILED;
}

interface ILOGOUT {
  readonly type: typeof LOGOUT;
}

interface ICHECK_AUTH {
  readonly type: typeof SET_AUTH_CHECKED;
}

export type TUserActions =
  | IUSER_REQUEST
  | IUSER_SUCCESS
  | IUSER_FAILED
  | ILOGOUT
  | ICHECK_AUTH;
