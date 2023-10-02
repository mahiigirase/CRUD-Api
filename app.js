const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./Route/userRoute');
const movieRoute = require('./Route/movieRoute');
const productRoute = require('./Route/productRoute')
require('dotenv/config');

const app = express();

app.use(express.json());

//default api
app.get('/', (req,res)=>{
    res.send("this is home")
})

//user route
app.use('/api/user',userRoute);

//movie route
app.use('/api/movie', movieRoute)

//aproduct route
app.use('/api/product',productRoute)

app.listen(process.env.PORT)

async function dataBase(){
    try {
        const data = await mongoose.connect(process.env.DB)
        console.log(data.default.STATES.connected)
    } catch (error) {
        console.log(error.message)
    }
}
dataBase()