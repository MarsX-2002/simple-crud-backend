const express = require('express')
const mongoose = require('mongoose')  // to connect DB
const Product = require('./models/product.model.js')  // to connect product model
const productRoute = require('./routes/product.route.js')  // to connect product route
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send('Hello from Node API Server!')
})


// mongodb coonnection
mongoose.connect("mongodb+srv://cobocoinweb3:<password>@backenddb.aih7k.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(
        () => {
            console.log('Connected to MongoDB')
            app.listen(3000, () => {
                console.log('Server is running on port 3000');
            })
        })
    .catch(err => {
        console.log(err)
    })

