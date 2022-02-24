import mongoose from "mongoose";
let Schema = mongoose.Schema;

let puntuacionSchema = Schema(
    {
        _id: { type: Schema.ObjectId, auto:true },
        name : String,
        puntuacion: Number
    }
)
module.exports = mongoose.model('Score', puntuacionSchema);
