import express from "express";
import { query, validationResult, body, matchedData, checkSchema } from "express-validator"
import { createUserValidationSchema } from './utils/validationSchemas.mjs'
import userRouter from './routes/user.mjs'
import { mockUser } from "./utils/constat.mjs";
import{resolveIndexByUserId} from './utils/middleware.mjs'


    const app = express()



    app.use(express.json())
    app.use(loggingMiddleware)
    app.use(userRouter)
  
    const resolveIndexByUserId = (request, response, next)=> {
        const {body, params : {id}} = request

        const parseId = parseInt (id)
        if(isNaN(parseId)) return response.sendStatus(400);

        const findUserIndex = mockUser.findIndex((user) => user.id === parseId)

        if (findUserIndex === -1) return response.sendStatus(404)
        request.findUserIndex = findUserIndex
    }

    const PORT =process.env.PORT || 3000
 

    app.get("/", (request, response, next)=>{
        console.log("Base URL")
        console.log("Finished Logging")
        next()
    },
    (request, response)=> {
        response.status(200).send("Hello World !")
    }
    )
 



 



    app.get("/api/products",(request,response) =>{
        response.send([{id :123, name:"dada ayam", harga:100000}])
    })


    // Akses Ke server
    app.listen(PORT, ()=> {
        console.log(`Running on port ${PORT}`)
    })

