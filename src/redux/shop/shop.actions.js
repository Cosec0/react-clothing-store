import ShopActionTypes from "./shop.types";

export const updateShopData = (collections) => ({
    type: ShopActionTypes.UPDATE_SHOP_DATA, 
    payload: collections
})