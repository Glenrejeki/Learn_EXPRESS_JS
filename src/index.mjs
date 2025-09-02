    import express from "express";

    const app = express()

    const PORT =process.env.PORT || 3000


    app.get("/", (request, response)=>{
        response.status(201).send("Hello World !")
    })
 
    app.get('/api/users', (request, response)=> {
        response.send([
            {id :1, username : "jeki", displayName : "Jeki"},
            {id :2, username : "glen", displayName : "Glen"},
            {id :3, username : "kobra", displayName : "Kobra"},
        ])
    })

    app.get("/api/users/:id", (request, response)=>{
        console.log(request.params)
    })

    app.get("/api/products",(request,response) =>{
        response.send([{id :123, name:"dada ayam", harga:100000}])
    })


    app.listen(PORT, ()=> {
        console.log(`Running on port ${PORT}`)
    })