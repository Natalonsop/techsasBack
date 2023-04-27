import mongoose from "mongoose";

const schema = mongoose.Schema
const userSchema = new schema ({
    nombre : {type:String},
    email : {type:String},
    pass : {type:String}
}
,{collection:'userData'}
)
export default mongoose.model('UserModel', userSchema)