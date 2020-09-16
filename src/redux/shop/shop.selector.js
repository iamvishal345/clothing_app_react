import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.shopItems
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (collections) => {
    return collections[collectionUrlParam];
  });
