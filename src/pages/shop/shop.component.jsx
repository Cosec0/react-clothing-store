import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firestore } from '../../firebase/firebase.utils';
import { updateShopData } from '../../redux/shop/shop.actions';

const ShopPage = () => {
    const dispatch = useDispatch();
    
    useEffect(async () => {
        const collectionsRef = await firestore.collection('collections');
        const collectionsObj = {};

        await collectionsRef.get().then((snapshot) => {
            for(let i = 0; i < snapshot.docs.length; i++) {
                const { title, items } = snapshot.docs.at(i).data();

                collectionsObj[title.toLowerCase()] = {
                    routeName: encodeURI(title.toLowerCase()), 
                    id: i + 1, 
                    title, 
                    items
                }
            }
        });

        dispatch(updateShopData(collectionsObj));
    }, []);

    return (
        <div className='shop-page'>
            <Outlet/>
        </div>
    );
}

export default ShopPage;