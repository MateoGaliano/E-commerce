import ItemList from './ItemList';

const ItemListContainer = (props) => {
    return(
        <>
        <p>Contenedor</p>
        <ItemList items={props.items}></ItemList>
        </>
    )
};

export default ItemListContainer;