import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    productImage: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        default: 0,
        type: Number
    },
    categury: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categury",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestemp: true})

export const Product = mongoose.model("Product", productSchema)