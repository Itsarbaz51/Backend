import monogoose from 'mongoose'

const hospitalSchema = new monogoose.Schema({
    name: {
        type: String,
        required: true
    },
    addresLine1: {
        type: String,
        required: true
    },
    addresLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    specializedIn: [
        {
            type: String
        }
    ]
}, {timestemp: true})

export const Hospital = monogoose.model("Hospital", hospitalSchema)