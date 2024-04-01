import {asyncHandler} from "../utils/asyncHandler.js"

const registerUsers = asyncHandler( async (req, res) => {
    res.status(200).json({
        message : "Ok"
    })
})

export {registerUsers}