const express = require('express')
const app = express();
const { products } = require('./data')

// Home Page
app.get('/', (req, res) =>{
    res.send('<h1>Home Page</h1><a href="/api/total-products">Total Products</a><a href="/api/products">Products</a><a href="/api/reviews">Reviews</a>')
})

// Return Total Products
app.get('/api/total-products', (req,res)=>{
    const newTotalProducts = products.map((product)=>{
        const { id, name, image } = product
        return { id, name, image }
    })

    res.json(newTotalProducts)
})

// Return Products
app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const { name, price } = product 
        return { name, price }
    })
    res.json(newProducts)
})

// Return Reviews
app.get('/api/reviews', (req, res)=>{
    const newReviews = products.map((product)=>{
        const { name , desc } = product
        return { name, desc }
    })
    res.json(newReviews)
})


// Return product wth param
app.get('/api/products/:productID', (req, res)=>{
    const { productID } = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))

    // Check available product  
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }

    return res.json(singleProduct)
})

// Return review wth param
app.get('/api/total-products/:productID/reviews/:reviewID', (req,res)=>{
    res.send('Hello World')
})

// Query string
app.get('/api/v1/query', (req,res)=>{
    const { search, limit } = req.query
    let sortedProducts = [...products]

    // filter
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    // limit logic
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    // 
    if(sortedProducts.length < 1 ){
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)
})


// port
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})