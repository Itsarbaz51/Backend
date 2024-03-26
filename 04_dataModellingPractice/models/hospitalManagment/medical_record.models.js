import monogoose from 'mongoose'

const medicalRecordSchema = new monogoose.Schema({}, {timestemp: true})

export const MedicalRecord = monogoose.model("MedicalRecord", medicalRecordSchema)