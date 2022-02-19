import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './collection.styles.scss';

import { selectShopCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';


function CollectionPage() {
    const params = useParams();
    
    const collection = useSelector(selectShopCollection(params.collectionId));
    console.log('is', params.collectionId);
    if(!collection) {
        return (
            <div>Not found</div>
        )
    }

    const  { title, items } = collection;
    console.log(title);
    return (
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>

    )
}

export default CollectionPage;