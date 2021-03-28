const pruebaEvento = () => {

const holaMundo = () => {
    alert('Hola Mundo')
}

const cambio = (e) => {
    console.log(e.nativeEvent);
}


    return(
        <>

            <input type="text" onChange={cambio}></input>
        </>
    )
}

export default pruebaEvento;