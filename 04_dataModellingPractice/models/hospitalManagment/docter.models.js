import monogoose from 'mongoose'



const docotorSchema = new monogoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYear: {
        type: Number,
        default: 0
    },
    worksInHospitals: [
        {
            type: monogoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ]
}, {timestemp: true})

export const Doctor = monogoose.model("Doctor", docotorSchema)