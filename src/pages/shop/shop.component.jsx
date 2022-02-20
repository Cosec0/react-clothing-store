import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import { selectShopCollectionsFetchingStatus, selectShopCollectionsError } from '../../redux/shop/shop.selector';

const ShopPage = ({ fetchCollections, isFetching, errorMessage }) => {
    // const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetchCollections();
        // setIsLoading(false);
    }, []);

    if(errorMessage) {
        return (
            <div className='shop-page'>
                Could not load Shop data due to {errorMessage}. Try again later
            </div>
        );
    }

    return (
        <div className='shop-page'>
            <Outlet context={isFetching}/>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectShopCollectionsFetchingStatus,
    errorMessage: selectShopCollectionsError
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollections: () => dispatch(fetchCollectionsAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);