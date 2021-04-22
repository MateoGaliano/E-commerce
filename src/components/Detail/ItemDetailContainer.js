import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getItemById} from '../Firebase/FirebaseComponent';


const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})

    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

        useEffect(() => {
                new Promise((resolve, rejected) => {

                    getItemById(itemId).then(v => 
                        resolve(v)
                    )

                    }).then((resultado) => {
                        setDetail(resultado);
                        setLoading(false)
                    });
            })

    return(
        <>
        {
            loading ? "" :
            <div>
                <ItemDetail detail={detail}></ItemDetail>
            </div>
        }
        </>
    )
    }

export default ItemDetailContainer;