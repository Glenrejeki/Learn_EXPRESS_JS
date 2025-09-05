import express from "express";
import { query, validationResult } from "express-validator"


    const app = express()

    const loggingMiddleware = (request, response, next)=> {
        console.log(`${request.method} - ${request.url}`)
        next()
    }

    app.use(express.json())
    app.use(loggingMiddleware)

    const resolveIndexByUserId = (request, response, next)=> {
        const {body, params : {id}} = request

        const parseId = parseInt (id)
        if(isNaN(parseId)) return response.sendStatus(400);

        const findUserIndex = mockUser.findIndex((user) => user.id === parseId)

        if (findUserIndex === -1) return response.sendStatus(404)
        request.findUserIndex = findUserIndex
    }

    const PORT =process.env.PORT || 3000

    const mockUser = [
            {id :1, username : "jeki", displayName : "Jeki"},
            {id :2, username : "glen", displayName : "Glen"},
            {id :3, username : "kobra", displayName : "Kobra"},
    ]
 

    app.get("/", (request, response, next)=>{
        console.log("Base URL")
        console.log("Finished Logging")
        next()
    },
    (request, response)=> {
        response.status(200).send("Hello World !")
    }
    )
 
    app.get('/api/users',query('filter').isString().notEmpty().withMessage("Tidak boleh kosong").isLength({min :3, max : 10}).withMessage("Setidaknya 10 karakter") ,(request, response)=> {
        const result = validationResult(request)
        console.log(result)
        const {filter, value} = request.query
        
        if (!filter && !value) {
            return response.send(mockUser)
        }

        if (filter && value) {
            const filtered = mockUser.filter((user) =>
                String(user[filter]).includes(value)
            )
            return response.send(filtered)
        }

        return response.status(400).send({ msg: "Invalid query params" })
    })


    // Post Request 
    app.post('/api/users', (request, response)=> {
        const {body} = request
        const newUser = {id :mockUser[mockUser.length-1].id+1, ...body }
        mockUser.push(newUser)
        return response.status(201).send(newUser)
    })

    app.get("/api/users/:id", (request, response)=>{
        console.log(request.params)
        const parseId = parseInt(request.params.id)
        console.log(parseId)

        if(isNaN (parseId)) return response.status(400).send({msg :'Bad Request. Invalid ID'})

        const findUsers = mockUser.find((user)=> user.id === parseId)

        if(!findUsers) return response.sendStatus(404)
            return response.send(findUsers)
    })

    app.get("/api/products",(request,response) =>{
        response.send([{id :123, name:"dada ayam", harga:100000}])
    })

    // Put
    app.put("/api/users/:id",(request,response) => {
        const {body, findUserIndex} = request

        mockUser[findUserIndex] = {id :mockUser[findUserIndex], ...body}

        return response.sendStatus(200)
    }) 

    // PATCH
    app.patch("/api/users/:id",(request,response)=> {
        const {body, params : {id}} = request

        const parseId = parseInt (id)
        if(isNaN(parseId)) return response.sendStatus(400);

        const findUserIndex = mockUser.findIndex((user) => user.id === parseId)

        if (findUserIndex === -1) return response.sendStatus(404)
        mockUser[findUserIndex] = {... mockUser[findUserIndex], ...body}
        return response.sendStatus(200)
    })

    // Delete
    app.delete('/api/users/:id', (request, response) => {
        const { params: { id } } = request;
        const parseId = parseInt(id);
        
        if (isNaN(parseId)) return response.sendStatus(400);

        const findUserIndex = mockUser.findIndex((user) => user.id === parseId);
        if (findUserIndex === -1) return response.sendStatus(404);

        mockUser.splice(findUserIndex, 1);
        return response.sendStatus(200);
    });





    // Akses Ke server
    app.listen(PORT, ()=> {
        console.log(`Running on port ${PORT}`)
    })

