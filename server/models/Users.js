const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    'name':String,
    'review':String
},
{
    versionKey: false 
}
)
const UserModel= mongoose.model("reviews",UserSchema)

module.exports = UserModel