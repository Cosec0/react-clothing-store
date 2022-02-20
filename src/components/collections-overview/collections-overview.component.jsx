import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"; 
import { useOutletContext } from "react-router-dom";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopCollectionsPreview } from "../../redux/shop/shop.selector";
import Spinner from '../../components/spinner/spinner.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    const isLoading = useOutletContext();
    
    if(isLoading || !collections) return (<Spinner/>)
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