import express from 'express'
import { login, logout, register } from '../controller/auth.js'

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

router.get("/login",(req,res) => {
    res.send('ok')
})

export default router