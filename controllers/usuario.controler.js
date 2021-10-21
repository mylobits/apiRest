const { response } = require("express");
const Usuario = require("../models/usuario")

const getUsuario=(req,res)=>{
    res.status(200).json({
        msj:"hola mundo"
    })
};

const postUsuario= (req,res=response)=>{
    const body=req.body;
    
    res.json(body)
}

const putUsuario=(req,res)=>{   
 

    res.status(200).json({
        msj:"hola mundo"
    })
}

const pathUsuario=(req,res)=>{
    res.status(200).json({
        msj:"hola mundo"
    })
}

const deleteUsuario=(req,res)=>{
    res.status(200).json({
        msj:"hola mundo"
    })
}

module.exports={
    getUsuario,
    postUsuario,
    putUsuario,
    pathUsuario,
    deleteUsuario
}