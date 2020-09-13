import { userActionType } from "./user.types";
export const setCurrentUser = (user) => {
  return {
    type: userActionType,
    payload: user,
  };
};
