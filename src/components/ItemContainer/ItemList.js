import Item from './Item'

const ItemList = (props) => {
    return(
        <>
            <p>Esta lista tiene</p>
            <ul>
                {props.items.map((x,index) => (
                    <Item key={index} item={x}></Item>
                ))}
            </ul>
        </>
    )
}

export default ItemList;