const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./Route/userRoute');
const movieRoute = require('./Route/movieRoute');
const productRoute = require('./Route/productRoute')
require('dotenv/config');
const cors = require('cors')


const app = express();

app.use(cors());
app.use(express.json());
// Enable CORS for all routes
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
//   res.header('Access-Control-Allow-Origin', 'https://crud-api-service.onrender.com');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });
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