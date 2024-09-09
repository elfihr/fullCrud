import express from "express"
import routerRouter from "./routes/Post.js"
import authRouter from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//middleware
app.use(express.json());
app.use(cors())
app.use(cookieParser())


//useRoutes
app.use("/api/posts", routerRouter)
app.use("/api/auth", authRouter)



//Test and Run
app.get("/",(req,res) => {
    res.send("Server Online")
})

app.listen(4500, () => {
    console.log("Server Online")
    console.log("http://localhost:4500")
})