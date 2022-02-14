import mongoose from 'mongoose';
const { Schema } = mongoose;

let UsuarioSchema = new Schema(
    {
        _id: {type: Schema.ObjectId, auto:true},
        nombre: String,
        email: String,
        password: String,
        puntuaciones: [{
            type: Schema.ObjectId, ref:'Score'
        }]
    }
)

const Usuario = mongoose.model("User", UsuarioSchema);

export { Usuario };