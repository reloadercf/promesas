const requestDog =(raza)=>fetch(`https://dog.ceo/api/breed/${raza}/images/random`).then(res=>{
        return res.json()
     })

requestDog('chihuahua')
.then(resultado=>{
    console.log('soy el resultado: ');
   console.log(resultado);
})
.catch(err=>{
console.log(err);
})
