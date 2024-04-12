const perros = [
    {
        id:1,
        name:'Chihuahua',
        location:1
    },
    {
        id:2,
        name:'Xoloescuincle',
        location:2
    },
    {
        id:3,
        name:'Buldog',
        location:1
    }
]

const ubicaciones = [
    {
        id:1,
        place:'Mexico'
    },
    {
        id: 2,
        place: 'Lima'
    }
]

const findDog=(id)=>{
    const dog = perros.find(perrito=>perrito.id===id);
    if(!dog){
        const err= new Error();
        err.message = 'No hay perrito Sorry :('
        return err;
    }
    return dog;
}

const getDog =(id, callback)=>{
    const mydog = findDog(id);
    const location = callback(mydog.location);
    if(!location){
        const err= new Error();
        err.message = 'Error en funcion'
        return err;
    }
    return `El perrito ${mydog.name} es de ${location.place}`
}

console.log(getDog(1, (idLocation)=>{
    const findLocation = ubicaciones.find(ubicacion=>ubicacion.id===idLocation);
    if(!findLocation) return 'no econtre la ubicacion';
    return findLocation;
}));