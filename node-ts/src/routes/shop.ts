import express, {Request, Response} from 'express'
const router = express.Router()

const path = require('path')
const rootDir = require('../util/path')

router.get('/', (req: Request, res: Response, next: Function)=>{
 res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router
