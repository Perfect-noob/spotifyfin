const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        name: {
			type: String,
			required: [true]
		},
		email: {
			type: String,
			required: [true, "Please enter an email id"]
		},
		password: {
			type: String,
			required: [true, "Password length must be atleast 6 characters"]
		},
        uniqueid:{
            type:String,
            required:[true]
        }
    },
    {
        timestamps:true
    }
);

const Users =mongoose.model("User",userSchema);

module.exports = Users;
