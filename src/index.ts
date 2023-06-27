import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import { productsRouter } from './Routes/products-router'
import { addressesRouter } from './Routes/addresses-router'

// create express app
const app = express()

const port = process.env.PORT || 4000

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]
const addresses = [{id: 1, value: 'Mitinskaya'}, {id: 2, value: 'Selickaga'}]

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.get('/', (req: Request, res: Response) => {
  res.send('Добро пожаловать на главную страницу!')
})


app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)


// start app 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})