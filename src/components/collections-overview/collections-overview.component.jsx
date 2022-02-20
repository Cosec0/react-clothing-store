import CollectionPreview from "../collection-preview/collection-preview.component";
import Spinner from '../../components/spinner/spinner.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections, isLoading }) => {
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

export default CollectionsOverview;