import { useEffect, useState } from 'react';
import ItemInfo from '../../ItemInfo.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [detail, handleDropDown] = useState({})

   const [ detailItem ] = ItemInfo.filter( item => item.id === 1)

    useEffect(() => {

        new Promise((respond, rejected) => {
            setTimeout(() => {
                respond(detailItem);
              },1000);

            }).then((resultado) => handleDropDown(resultado));
        })

    return(
        <div>
            <ItemDetail detail={detail}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer;