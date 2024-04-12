const saludo=(nombre)=>`Hola ${nombre} soy el perrito`

const perritoSaludando=(nombre, callback)=>{
    const crearSaludoDelPerrito = callback(nombre) + ' Te estoy dando la patita'
    return crearSaludoDelPerrito;
}

console.log(perritoSaludando('Carlos',saludo));