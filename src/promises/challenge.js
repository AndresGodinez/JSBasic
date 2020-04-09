const fechData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

fechData(API)
.then(data=>{
    console.log(data)
})
.catch(err=>console.log(err))