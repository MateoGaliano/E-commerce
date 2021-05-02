import {getFirestore} from '../../configs/Firebase';
import 'firebase/firestore';

    const findAll = () => {
      const db = getFirestore();
        const novedadesCollection = db.collection('novedades')

        return novedadesCollection.get().then((resp) => {
          if(resp.size === 0) {
            console.log('Sin datos')
          }

          return resp.docs.map((c) =>{return {id: c.id, ...c.data()}});
        }).catch((error) => console.log(error))
    }

    const findByCategoria = (categoryId) => {
      const db = getFirestore();
        const categoriasCollection = db.collection('categorias').where('categoria', "==", categoryId)

        return categoriasCollection.get().then((resp) => {
          if(resp.size === 0) {
            console.log('Sin datos')
          }

          return resp.docs.map((c) =>{return {id: c.id, ...c.data()}});
        }).catch((error) => console.log(error))
    }

    const getItemById = (itemId) => {
      const db = getFirestore();
      const categoriasCollection = db.collection('categorias')
      .doc(itemId)

      return categoriasCollection.get().then((res) => res.data())
    }


export {findAll, findByCategoria, getItemById};