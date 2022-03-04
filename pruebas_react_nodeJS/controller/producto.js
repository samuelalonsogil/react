import {Product} from '../models/producto.js';

/*listar todos los elementos*/
async function getAll(req, res){
    try{
        let products = await Product.find();
        res.status(200).json( {accion: 'get all products', datos: products} );
    }catch (err){
        res.status(500).json( {accion: 'get all products', mensaje: 'error al obtener las puntuaciones'} );
    }
}

/*listar elemento por id*/
async function getById(req, res){
    let productId = req.params.id;

    try{
        let product = await Product.findById(productId);
        res.status(200).json( {accion: 'get one', datos: product} );
    }catch (err){
        res.status(500).json( {accion: 'get one', mensaje: 'error al obtener el product'} );
    }
}


/*eliminar elemento por id*/
async function remove(req, res){
    let productId = req.params.id;
    try{
        let deletedProduct = await Product.findByIdAndDelete(productId);
        res.status(200).json( {accion: 'remove one product', datos: deletedProduct} );
    }catch (err){
        res.status(500).json( {accion: 'remove', mensaje: 'error al borrar product' } );
    }
}

/*edit elemento por id*/
async function update(req, res){
    let data = req.body;
    let productId = req.params.id;
    try{
        let productUpdated = await Product.findByIdAndUpdate(productId, data);
        res.status(200).json( {accion: 'update one', datos: productUpdated} );
    }catch (err){
        res.status(500).json( {accion: 'update', mensaje: 'error  updating product' } );
    }
}


/*insertar elemento*/
async function insert(req, res){
    let product = new Product(req.body);
    try{
        let savedProduct = await product.save();
        res.status(200).json( {accion: 'save one', datos: savedProduct} );
    }catch (err){
        res.status(500).json( {accion: 'save', mensaje: 'error al guardar puntuacion' } );
    }
}

export {getAll, insert, update, getById, remove};