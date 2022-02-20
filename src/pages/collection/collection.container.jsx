import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectShopCollection, selectShopCollectionsFetchingStatus } from '../../redux/shop/shop.selector';

import CollectionPage from './collection.component';

const CollectionPageContainer = ({ isLoading }) => {
    const params = useParams();
    const collection = useSelector(selectShopCollection(params.collectionId));
    
    return (
        <CollectionPage isLoading={isLoading} collection={collection} />
    );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectShopCollectionsFetchingStatus
});

export default connect(mapStateToProps)(CollectionPageContainer);