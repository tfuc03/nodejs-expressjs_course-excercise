const express = require('express')
const { products } = require('./data')
const app = express()

app.get('/', (req, res)=>{
    res.json(products)
})

app.use((req,res)=>{
    res.status(404).send('<h1>Page Not Found.</h1>')
})

app.listen(5000,()=>{
    console.log('Server is listening on port: 5000...')
})