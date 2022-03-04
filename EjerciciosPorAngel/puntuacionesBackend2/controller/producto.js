import {Producto} from '../models/producto.js';

async function getAll(req,res) {
   try{
       let productos = await Producto.find();
       res.status(200).json({accion:'get all', datos: productos}) 
   }catch(err){
       res.status(500).json({accion:'get all', mensaje:'error al obtener los productos'}) 
   }
}


async function getById(req,res) {
    let productoId = req.params.id;
    try{
        let producto = await Producto.findById(productoId);
        res.status(200).json({accion:'get one', datos: producto}) 
    }catch(err){
        res.status(500).json({accion:'get one', mensaje:'error al obtener el producto'}) 
    }
}


async function insert(req, res){
     const producto = new Producto(req.body)
     try{
         let productoGuardado = await producto.save();
         res.status(200).json({accion:'save', datos: productoGuardado}) 
     }catch(err){
         console.log(err)
         res.status(500).json({accion:'save', mensaje:'error al guardar el producto'}) 
     }
 }


 async function remove(req,res){
    let productoId = req.params.id;
    try{
        let productoBorrado = await Producto.findByIdAndDelete(productoId);
        res.status(200).json({accion:'delete', datos: productoBorrado}) 
    }catch(err){
        res.status(500).json({accion:'delete', mensaje:'error al borrar le producto'}) 
    }
}



async function update (req,res){
    var datos = req.body;
    let productoId = req.params.id;

    try{
        let productoActualizado = await Producto.findByIdAndUpdate(productoId, datos);
        res.status(200).json({accion:'update', datos: productoActualizado}) 
    }catch(err){
        res.status(500).json({accion:'update', mensaje:'error al actualizar el producto'}) 
    }
}

export {getAll, getById, insert, remove, update }