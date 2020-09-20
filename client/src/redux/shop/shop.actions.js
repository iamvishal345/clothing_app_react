import ShopActionsType from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionsType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionsType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFailure = (errMessage) => ({
  type: ShopActionsType.FETCH_COLLECTIONS_FAILURE,
  payload: errMessage,
});

//Thunk way
// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart());
//     collectionRef
//       .get()
//       .then((snapshot) => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((err) => {
//         dispatch(fetchCollectionsFailure(err.message));
//       });
//   };
// };

//Observable Way
// collectionRef.onSnapshot(async (snapshot) => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   dispatch(fetchCollectionsSuccess(collectionsMap));
// });
