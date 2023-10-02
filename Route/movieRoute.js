const route = require('express').Router();
const {getData,postData,updateData,deleteData} = require('../Controllers/movieController');

route.get('/',getData)
route.post('/',postData)
route.put('/:id',updateData)
route.delete('/:id',deleteData)

module.exports = route