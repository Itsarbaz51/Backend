import { Router } from "express"
import { registerUsers } from "../controllers/user.controller.js"
import {upload} from "../middleware/multer.middleware.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUsers)

export default router