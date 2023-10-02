const  route = require('express').Router();
const {getData,postData,putData,deleteData} = require('../Controllers/userController');

route.get('/',getData)
route.post('/',postData)
route.put('/:id',putData)
route.delete('/:id',deleteData)


module.exports = route