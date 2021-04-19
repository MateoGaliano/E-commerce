import {getFirestore} from '../../configs/Firebase';

    const findAll = () => {
      const db = getFirestore();
        const categoriasCollection = db.collection('categorias')

        return categoriasCollection.get().then((resp) => {
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

    const getItemById = () => {
      const db = getFirestore();
      const categoriasCollection = db.collection('categorias')
      .doc(document.getElementById("idDoc"))

      categoriasCollection.get().then((res) => {
        console.log(res.data())
      })
    }


export {findAll, findByCategoria, getItemById};