import { userActionType } from "./user.types";

export const googleSignInStart = () => ({
  type: userActionType.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: userActionType.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: userActionType.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionType.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

//check user session action
export const checkUserSession = () => ({
  type: userActionType.CHECK_USER_SESSION,
});

//Sign out actions
export const signOutStart = () => ({
  type: userActionType.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionType.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (err) => ({
  type: userActionType.SIGN_OUT_FAILURE,
  payload: err,
});

//Sign up actions
export const signUpStart = (user) => ({
  type: userActionType.SIGN_UP_START,
  payload: user,
});
export const signUpSuccess = () => ({
  type: userActionType.SIGN_UP_SUCCESS,
});
export const signUpFailure = (err) => ({
  type: userActionType.SIGN_UP_FAILURE,
  payload: err,
});
