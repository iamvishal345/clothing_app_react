import ShopActionsType from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const fetchCollectionsStart = () => ({
  type: ShopActionsType.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionsType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

const fetchCollectionsFailure = (errMessage) => ({
  type: ShopActionsType.FETCH_COLLECTIONS_FAILURE,
  payload: errMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((err) => {
        dispatch(fetchCollectionsFailure(err.message));
      });
  };
};

//Observable Way
// collectionRef.onSnapshot(async (snapshot) => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   dispatch(fetchCollectionsSuccess(collectionsMap));
// });
