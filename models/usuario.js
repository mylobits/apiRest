const {Schema,model}=require('mongoose');

const shemaUsuario=Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },

    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },

    password:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },

    rol:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        emun:['ADMIN_ROLE','USER_ROLE']
    },

    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }

})

module.exports=model('Usuario',shemaUsuario);