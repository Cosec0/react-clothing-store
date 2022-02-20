import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"; 

import { selectShopCollectionsPreview, selectShopCollectionsFetchingStatus } from "../../redux/shop/shop.selector";
import CollectionOverview from './collections-overview.component';

const CollectionsOverviewContainer = ({ collections, isLoading }) => (
    <CollectionOverview isLoading={isLoading} collections={collections} />
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsPreview,
    isLoading: selectShopCollectionsFetchingStatus
})

export default connect(mapStateToProps)(CollectionsOverviewContainer);