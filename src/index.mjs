    import express, { request, response } from "express";

    const app = express()

    app.use(express.json())

    const PORT =process.env.PORT || 3000

    const mockUser = [
            {id :1, username : "jeki", displayName : "Jeki"},
            {id :2, username : "glen", displayName : "Glen"},
            {id :3, username : "kobra", displayName : "Kobra"},
    ]
 

    app.get("/", (request, response)=>{
        response.status(201).send("Hello World !")
    })
 
    app.get('/api/users', (request, response)=> {
        console.log(request.query)
        const  {filter, value} = request.query
        if (!filter && !value) return response.send(mockUser)

        if(filter && value) return response.send (mockUser.filter((user)=> user[filter].includes(value)))

        return res.send(filtered);
    })

    // Post Request 
    app.post('/api/users', (request, response)=> {
        const {body} = request
        const newUser = {id :mockUser[mockUser.length-1].id+1, ...body }
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
        
    }) 


    app.listen(PORT, ()=> {
        console.log(`Running on port ${PORT}`)
    })

    