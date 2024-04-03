import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.models.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUsers = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check id user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    // 1 commit
    const {fullName, email, username, password} = req.body
    console.log("fullName: ", fullName)

    // if (fullName === "") {
    //     throw new ApiError(400, "fullName is required")
    // }

    // 2 commit
    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fieldsn are required")
    }

    // 3 commit
    const existedUser = User.findOne({
        $or: [{username},{email}]
    })
    if (existedUser) {
        throw new ApiError(409, "User already exists")
    }

    // 4 commit
    const avatarLocalPath = req.files?.avatar[0].path;
    const coverImageLocalPath = req.files?.coverImage[0].path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    // 5 commit
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    // 6 commit
    const user = User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    // 6 commit
    const createdUser = await User.findById((await user)._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    // 7 commit
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
})

export {registerUsers}