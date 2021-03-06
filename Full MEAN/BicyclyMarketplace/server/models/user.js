var bcrypt         = require('bcrypt');
var mongoose       = require('mongoose');
var Schema         = mongoose.Schema,
userSchema = new Schema({
    firstname: { type: String, required: [true, "First Name required"]},
    lastname: { type: String, required: [true, "Last Name required"]},
    email:{
        type:String,
        required:[true,"Email is required"],
        validate:{
            validator:function(value){
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            },
            message:"Invalid E-mail format."
            }
        },
        password: {
            type: String,
            required: [true,"Password required"],
            minlength: 8,
            maxlength: 255,
            validate: {
                validator: function( value ) {
                    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test( value );
                },
                message: "Password failed validation, you must have at least 1 number, uppercase and special character"
            }
        },
        _bicycle: [{type: Schema.Types.ObjectId, ref: 'Bicycle'}]
},{timestamps:true});

userSchema.methods.hash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8));
}

userSchema.methods.match = function(inputPassword,password){
    return bcrypt.compareSync(inputPassword,password);
}

userSchema.pre("save",function(done){
    this.password = this.hash(this.password);
    done();
})
mongoose.model("User",userSchema);
