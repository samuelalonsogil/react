import mongoose from "mongoose";
const {Schema} = mongoose;

let PuntuacionSchema = new Schema(
    {
        _id: { type: Schema.ObjectId, auto:true },
        name : String,
        puntuacion: Number
    }
)
const Puntuacion = mongoose.model('Score', PuntuacionSchema);
export { Puntuacion };