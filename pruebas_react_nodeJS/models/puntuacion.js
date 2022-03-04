import mongoose from "mongoose";
const {Schema} = mongoose;

let PuntuacionSchema = new Schema(
    {
        _id: { type: Schema.ObjectId, auto:true },
        name : String,
        puntuacion: Number,
        user: {type: Schema.ObjectId, ref: 'User'}
    }
)
const Puntuacion = mongoose.model('Score', PuntuacionSchema);
export { Puntuacion };