import mongoose from 'mongoose'

const categurySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {timestemp: true});


export const Categury = mongoose.model("Categury", categurySchema)