import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';
import Spinner from '../../components/spinner/spinner.component';


const CollectionPage = ({ isLoading, collection }) => {
    if(isLoading || !collection) return (<Spinner/>)

    const  { title, items } = collection;
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