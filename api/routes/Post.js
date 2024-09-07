import express from 'express'
import { addPost, deletePost, getPost, updatePost } from '../controller/post.js'

const router = express.Router()

router.get("/",getPost);
router.post("/",addPost);
router.delete('/:id',deletePost);
router.put('/:id',updatePost)

export default router