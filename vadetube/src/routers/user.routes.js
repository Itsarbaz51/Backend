import { Router } from "express"
import { registerUsers } from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(registerUsers)

export default router