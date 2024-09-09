import { db } from "../db.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


export const register = (req, res) => {
    //check
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("user already exist")

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`username`,`password`) VALUES (?)"
        const values = [
            req.body.username,
            hash
        ]
        db.query(q, [values], (err, data) => {
            if (err) return res.json(err)
            return res.status(200).status("User has been created")
        })
    })
}


export const login = (req, res) => {
    //check user

    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.user], (err, data) => {
        if (err) return res.json(err)
       
        //check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if (!isPasswordCorrect) return res.status(400).json("password incorreto!")

        const token = jwt.sign({ id: data[0].id }, "jwtkey");//kwt need to be a randow
        const { password, ...other } = data[0]//protect password

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)

    })
}

export const logout = (req, res) => {

}