import mongoose from 'mongoose';
const { Schema } = mongoose;


let PuntuacionSchema = new Schema(
    {
        _id: {type: Schema.ObjectId, auto:true},
        puntuacion: Number,
        /*puntuacion: {
            type: Number,
            required: true,
            min: 0,
            max: 5
        },*/
        date: Date,
        usuario: {type: Schema.ObjectId, ref:'User'}
    }
)

const Puntuacion = mongoose.model("Score", PuntuacionSchema);

export { Puntuacion };