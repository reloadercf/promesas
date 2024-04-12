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
    },
    {
        id:4,
        name:'Maltes',
        location:3
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
    },
    {
        id:3,
        place:'Brazil'
    }
];

const findDogPromise =(id)=> new Promise((resolve, reject)=>{
    const findDog = perros.find(perrito=>perrito.id===id);
    if(!findDog) reject('Perrito no found')
    resolve(findDog)
})

const findLocation=(dog)=>new Promise((resolve, reject)=>{
    const locationDog = ubicaciones.find(location=>location.id===dog.location)
    if(!locationDog) reject('no hay ubicacion del perrito');
    resolve({...dog,...locationDog})
})

// findDogPromise(1)
// .then(result=>{
//    return findLocation(result)
// })
// .then(dogComplete=>{
//    console.log(`El perrito ${dogComplete.name} es de ${dogComplete.place}`);
// })
// .catch(err=>{
//     console.log(err);
// })


const allDogs = perros.map(dog=>findDogPromise(dog.id))

Promise.all(allDogs).then(todosLosPerritos=>{
    console.log(todosLosPerritos);
})