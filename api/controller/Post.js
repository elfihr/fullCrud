import { db } from "../db.js"

//GET
export const getPost = (req, res) => {
    const q = "SELECT * FROM posts"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
}

//POST
export const addPost = (req,res) =>  {
    const q = "INSERT INTO posts( `title` , `desc` , `img` ) VALUES (?)"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
    ]


    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Postado com Sucesso")
    })
}

//DELETE
export const deletePost = (req,res) => {
    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE id = ?"

    db.query(q,[postId], (err,data) => {
        if(err) return res.status.json(err)
            return res.json("Deletado com Sucesso")
    })
}

//PUT
export const updatePost = (req,res) => {
    const postId = req.params.id;
    const q = "UPDATE posts SET `title`=?,`desc`=?,`img`=? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.img
    ]

    db.query(q,[...values,postId],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}
