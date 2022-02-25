import ShopActionTypes from "./shop.types";
import { firestore } from '../../firebase/firebase.utils';

// export const updateShopData = (collections) => ({
//     type: ShopActionTypes.UPDATE_SHOP_DATA, 
//     payload: collections
// })

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START, 
})

export const fetchCollectionsSuccess = (collection) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, 
    payload: collection
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE, 
    payload: errorMessage
})

export const getCollectionsToObj = (collectionSnapshot) => {
    const collectionsObj = {};

    for(let i = 0; i < collectionSnapshot.docs.length; i++) {
        const { title, items } = collectionSnapshot.docs.at(i).data();

        collectionsObj[title.toLowerCase()] = {
            routeName: encodeURI(title.toLowerCase()), 
            id: i + 1, 
            title, 
            items
        }
    }

    return collectionsObj;
}

export const fetchCollectionsAsync = () => {
    return (dispatch) => {
        const collectionsRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        let collectionsObj = {};

        collectionsRef.get().then(async (snapshot) => {
            collectionsObj = await getCollectionsToObj(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsObj));

        }).catch(errorMessage => {
            dispatch(fetchCollectionsFailure(errorMessage));
            console.log(errorMessage);
        });
    }
}