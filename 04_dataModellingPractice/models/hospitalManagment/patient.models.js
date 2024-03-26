import monogoose from 'mongoose'

const patientSchema = new monogoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagonsedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Others"],
        required: true
    },
    admitedIn: {
        type: monogoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, {timestemp: true})

export const Patient = monogoose.model("Patient", patientSchema)