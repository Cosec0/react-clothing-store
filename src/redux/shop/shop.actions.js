import ShopActionTypes from "./shop.types";
import { firestore } from '../../firebase/firebase.utils';

// export const updateShopData = (collections) => ({
//     type: ShopActionTypes.UPDATE_SHOP_DATA, 
//     payload: collections
// })

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START, 
})

export const fetchCollectionSuccess = (collection) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, 
    payload: collection
})

export const fetchCollectionFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE, 
    payload: errorMessage
})

const getCollectionsToObj = (collectionSnapshot) => {
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
        dispatch(fetchCollectionStart());
        let collectionsObj = {};

        collectionsRef.get().then(async (snapshot) => {
            collectionsObj = await getCollectionsToObj(snapshot);
            dispatch(fetchCollectionSuccess(collectionsObj));

        }).catch(errorMessage => {
            dispatch(fetchCollectionFailure(errorMessage));
            console.log(errorMessage);
        });
    }
}