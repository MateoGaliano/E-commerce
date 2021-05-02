import Item from './Item';
import './ItemList.css'

const ItemList = (props) => {

    return(
        <div className="contenedor">
            
            {props.items.map( item => <Item key={item.id}{ ...item } /> )}

        </div>
    )
}

export default ItemList;
