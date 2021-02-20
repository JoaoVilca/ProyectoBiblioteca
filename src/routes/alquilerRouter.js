const {Router}=require('express')
const Alquiler_controller = require('../controllers/alquilerController')
const alquiler_router = Router()

alquiler_router.post('/alquiler',Alquiler_controller.crearAlquiler)

module.exports=alquiler_router