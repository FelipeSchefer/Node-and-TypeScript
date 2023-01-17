import express, {Request, Response} from 'express'
const router = express.Router()

const path = require('path')
const rootDir = require('../util/path')

router.get('/add-product',(req: Request, res: Response, next: Function)=>{
 res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req: Request, res: Response, next: Function)=>{
 console.log(req.body)
 res.redirect('/')
})

module.exports = router