import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectShopCollectionsError } from '../../redux/shop/shop.selector';

const ShopPage = ({ fetchCollections, errorMessage }) => {
    
    useEffect(() => {
        fetchCollections();
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
            <Outlet/>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    errorMessage: selectShopCollectionsError
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollections: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);