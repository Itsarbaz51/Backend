import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamp: true})

export const SubTodo = mongoose.modle("SubTodo", subTodoSchema)
