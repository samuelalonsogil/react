import mongoose from 'mongoose';
const { Schema } = mongoose;


let ProductoSchema = new Schema(
    {
        _id: {type: Schema.ObjectId, auto:true},
        nombre: String,
        tipo: String,
        precio: Number,
        puntuaciones: [{
            type: Schema.ObjectId, ref:'Score'
        }],
        usuarioCreador: {type: Schema.ObjectId, ref:'User'}
    }
)

const Producto = mongoose.model("Product", ProductoSchema);

export { Producto };