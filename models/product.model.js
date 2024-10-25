const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be at least 0"]
    },
    description: {
        type: String,
        required: [false, "Description is not required"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity must be at least 0"]
    },
    image: {
        type: String,
        required: [false, "Image is not required"],
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);  // product model

module.exports = Product;
