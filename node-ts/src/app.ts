import express, {Request, Response} from 'express'
import http from 'http'
import bodyParser from 'body-parser'

const path = require('path')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express()     
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(adminRouter)
app.use(shopRouter)

app.use((req, res, next)=>{
 res.status(401).sendFile(path.join(__dirname, 'views', '404.html'))
})

const server = http.createServer(app)
server.listen('3001', (): void =>{
 console.log("Server running!")
})