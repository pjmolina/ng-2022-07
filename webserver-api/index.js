const express = require('express')
const app = express()
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  // res.status(200);
  res.append('x-powered-by2', 'express-svq')
  res.append('cache-control', 'no-cacheble')
  res.send('hola')
})

// pizzeria   MOCK
app.get('/pizzas', (req, res) => {
  res.json([
    {
      name: 'Margarita',
      price: 8.5,
      currency: 'EUR',
      vegan: false
    },
    {
      name: 'Con piña',
      price: 0.0004,
      currency: 'BTC',
      vegan: true
    },
    {
      name: 'con jalapeños',
      price: 0.0004,
      currency: 'BTC',
      noGluten: true,
      vegan: true
    }
  ])
})

// temperaturas
app.get('/temperaturas', (req, res) => {
  res.json([
    {
      city: 'Sevilla',
      code: 'SVQ',
      value: 44
    },
    {
      city: 'Cordoba',
      code: 'COR',
      value: 45
    },
    {
      city: 'Malaga',
      code: 'MLG',
      value: 25
    }
  ])
})

app.get('/version', (req, res) => {
  res.status(200)
  res.json({ version: '1.0.2' })
})

app.get('/time', (req, res) => {
  res.status(200)
  res.json({ ts: new Date().toISOString() })
})

app.listen(3000)
console.log('Estoy escuchando en http://localhost:3000')

// web ---
// HTTP
// req
//    cabeceras
//    body

// res
//    statuscode
//    headers
//    body
