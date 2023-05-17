
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({origin: 'http://localhost:3000'}))
const port = 8000;

 require('./config/mongoose.config')
 const AuthorsRoute =  require('./routes/authors.routes')
 app.use(express.json(),express.urlencoded({extended:true}))
 AuthorsRoute(app)
app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`))
