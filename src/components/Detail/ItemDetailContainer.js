import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemInfo from '../../ItemInfo.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})

    const {itemId} = useParams()

    useEffect(() => {

        new Promise((respond, rejected) => {
            setTimeout(() => {
                respond(ItemInfo.find(item => item.id.toString() === itemId));
              },1000);

            }).then((resultado) => setDetail(resultado));
        })

    return(
        <div>
            <ItemDetail detail={detail}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer;