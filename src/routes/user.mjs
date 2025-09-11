import { Router } from "express";
import { query } from "express-validator";
import { mockUser } from "../utils/constat.mjs";
import { validationResult, checkSchema } from "express-validator";
import {resolveIndexByUserId} from '../utils/middleware.mjs'

const router = Router()

router.get("/api/users",query('filter').optional().isString().notEmpty().withMessage("Tidak boleh kosong").isLength({min :3, max : 10}).withMessage("Setidaknya 10 karakter") ,(request, response)=> {
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
      router.post('/api/users', checkSchema(createUserValidationSchema) ,body('username').notEmpty().withMessage('Nama tidak boleh kosong').isLength({min : 4, max:32}).withMessage('Username setidaknya dari 5 - 32 karakter').isString().withMessage("Nama harus format string"), body("displayName").notEmpty ,(request, response)=> {
  
          const result = validationResult(request)
          console.log(result)
          if(!result.isEmpty())
              return response.status(400).send({error : result.array()})
          
          console.log(data)
          const data = matchedData(request)
          const {body} = request
          const newUser = {id :mockUser[mockUser.length-1].id+1, ...body }
          mockUser.push(newUser)
          return response.status(201).send(newUser)
      })

      router.get("/api/users/:id",resolveIndexByUserId ,(request, response)=>{
              console.log(request.params)
              const parseId = parseInt(request.params.id)
              console.log(parseId)
      
              if(isNaN (parseId)) return response.status(400).send({msg :'Bad Request. Invalid ID'})
      
              const findUsers = mockUser.find((user)=> user.id === parseId)
      
              if(!findUsers) return response.sendStatus(404)
                  return response.send(findUsers)
          })

      
    // Put
    router.put("/api/users/:id",(request,response) => {
        const {body, findUserIndex} = request

        mockUser[findUserIndex] = {id :mockUser[findUserIndex], ...body}

        return response.sendStatus(200)
    }) 

    // PATCH
    router.patch("/api/users/:id",(request,response)=> {
        const {body, params : {id}} = request

        const parseId = parseInt (id)
        if(isNaN(parseId)) return response.sendStatus(400);

        const findUserIndex = mockUser.findIndex((user) => user.id === parseId)

        if (findUserIndex === -1) return response.sendStatus(404)
        mockUser[findUserIndex] = {... mockUser[findUserIndex], ...body}
        return response.sendStatus(200)
    })

    // Delete
    router.delete('/api/users/:id', (request, response) => {
        const { params: { id } } = request;
        const parseId = parseInt(id);
        
        if (isNaN(parseId)) return response.sendStatus(400);

        const findUserIndex = mockUser.findIndex((user) => user.id === parseId);
        if (findUserIndex === -1) return response.sendStatus(404);

        mockUser.splice(findUserIndex, 1);
        return response.sendStatus(200);
    });


    export default router
    