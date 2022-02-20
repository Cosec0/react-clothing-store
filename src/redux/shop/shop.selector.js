import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectShopCollectionsPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectShopCollection = (collectionUrlParam) => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectShopCollectionsFetchingStatus = createSelector(
    [selectShop],
    (shop) => shop.isFetching
);

export const selectShopCollectionsError = createSelector(
    [selectShop],
    (shop) => shop.errorMessage
);