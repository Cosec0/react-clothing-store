import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"; 

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopCollectionsPreview } from "../../redux/shop/shop.selector";

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsPreview
})

export default connect(mapStateToProps)(CollectionsOverview);