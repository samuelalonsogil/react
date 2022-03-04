import mongoose from "mongoose";
const {Schema} = mongoose;

let ProductSchema = new Schema(
    {
        _id: {type: Schema.ObjectId, auto: true},
        name: String,
        price: Number,
        scores: [ {
            type: Schema.ObjectId, ref:'Score'
        } ],
        creatorUser: { type: Schema.ObjectId, ref: 'User' }
    }
)
const Product = mongoose.model('Product', ProductSchema);
export { Product };