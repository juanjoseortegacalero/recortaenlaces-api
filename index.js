const express = require ('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose} = require ('mongoose')
const cookieParser = require ('cookie-parser')
const router = express.Router();
const { test, registerUser, loginUser, getProfile, logOut, cortarEnlace, verEnlace, reDirect, ultimoEnlace} = require('./controllers/authControllers')
const app= express();


//Conection database
mongoose.connect(process.env.MONGO_URL) .then(()=> console.log('Database Connected')) .catch(()=> console.log('Database Connected', err))

//Middleware
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

router.use(
    cors({
        credentials: true,
        origin: 'https://recortaenlaces.onrender.com'
        
    })
)

const port = 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`))


router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.get('/logout', logOut)
router.post('/corta', cortarEnlace)
router.get('/verEnlace', verEnlace)
router.get('/ultimoEnlace', ultimoEnlace)
router.post('/:id', reDirect)


module.exports = router

