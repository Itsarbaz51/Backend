import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-paginate-v2"

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    },
    videoFile: {
        type: String, // middelware
        required: true,
    },
    thumbnail: {
        type: String, // middelware
        required: true,
    },
    duration: {
        type: Number,
    },
    views: {
        type: Number,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: true,
    }
}, {timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate); //pagination plugin

export const Video = mongoose.model("Video", videoSchema)