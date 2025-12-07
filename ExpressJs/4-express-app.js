const express = require('express')
const path = require('path')
const app = express()

// static and middleware
app.use(express.static('../public'))

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.resolve(__dirname, ('../navbar-app/index.html')))
})

app.get('/about', (req,res)=>{
    res.status(200).send('<h1>About Page</h1>')
})

app.use((req,res)=>{
    res.status(404).send('<h1>Page not Found!!!</h1>')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port: 5000...')
})