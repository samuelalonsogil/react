import mongoose from "mongoose";
const {Schema} = mongoose;

let UserSchema = new Schema(
    {
        _id:{ type: Schema.ObjectId, auto: true },
        email: String,
        password: String,
        userName: String,
        scores: [ {
            type: Schema.ObjectId, ref: 'Score'
        } ]
    }
);

const User = mongoose.model('User', UserSchema);

export {User};