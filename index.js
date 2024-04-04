const express = require ('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose} = require ('mongoose')
const cookieParser = require ('cookie-parser')
const app= express();


//Conection database
mongoose.connect(process.env.MONGO_URL) .then(()=> console.log('Database Connected')) .catch(()=> console.log('Database Connected', err))


//Middleware
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://recortaenlaces.onrender.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))
