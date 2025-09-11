import express from "express";
import userRouter from './routes/user.mjs'
import productRouter from './routes/products.mjs'


    const app = express()



    app.use(express.json())
    app.use(loggingMiddleware)
    app.use(userRouter)
    app.use(productRouter)
  
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
 



 





    // Akses Ke server
    app.listen(PORT, ()=> {
        console.log(`Running on port ${PORT}`)
    })

