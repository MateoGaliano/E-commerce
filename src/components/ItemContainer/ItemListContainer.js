import ItemList from './ItemList';
import "../../Estilos/ItemListContainer.css"

const ItemListContainer = (props) => {
    return(
        <div className="container">
            <ItemList items={props.items}></ItemList>
        </div>
    )
};

export default ItemListContainer;