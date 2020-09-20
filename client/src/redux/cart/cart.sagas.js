import { all, call, takeLatest, put } from "redux-saga/effects";

import { userActionType } from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartSignOut() {
  yield put(clearCart());
}

export function* onSignOUtSuccess() {
  yield takeLatest(userActionType.SIGN_OUT_SUCCESS, clearCartSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOUtSuccess)]);
}
