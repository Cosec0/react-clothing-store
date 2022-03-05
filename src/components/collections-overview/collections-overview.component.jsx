import CollectionPreview from "../collection-preview/collection-preview.component";
import Spinner from '../../components/spinner/spinner.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections, isLoading }) => {
    if(isLoading || !collections) return (<Spinner/>)

    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionsOverviewContainer>
    );
}

export default CollectionsOverview;