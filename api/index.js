import express from "express"
import routerPost from "./routes/Post.js"
import cors from "cors"

const app = express()

//middleware
app.use(express.json());
app.use(cors())


//useRoutes
app.use("/api/posts", routerPost)

//Test and Run
app.get("/",(req,res) => {
    res.send("Server Online")
})

app.listen(4500, () => {
    console.log("Server Online")
    console.log("http://localhost:4500")
})