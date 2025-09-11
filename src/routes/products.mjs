import { Router } from "express";


const router = Router()

router.get("/api/products",(request,response) =>{
        response.send([{id :123, name:"dada ayam", harga:100000}])
})



export default router