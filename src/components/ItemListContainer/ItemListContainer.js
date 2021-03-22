import ItemList from '../ItemListContainer/ItemList';
import './ItemListContainer.css'

function ItemListContainer(props) {
    return (

      <div className="container">
        <ItemList items={props.items}></ItemList>
      </div>
    
    );
  }
  
  export default ItemListContainer;