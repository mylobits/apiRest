const express=require('express');
const { dataconection } = require('../data/databse');
require('dotenv').config();

class Service{

constructor(){
this.app=express();
// puerto
this.port=process.env.PORT;
this.rutaUsuario='/api/usuario'


//conectar a base de datos
this.dataconection();

//rutas
this.route();

//middleware
this.middleware();


}

 async dataconection(){
    await dataconection();
}

middleware(){

this.app.use(express.static('public'));
this.app.use(express.json());

// this.app.use(bodyParser.urlencoded({extended:true}))
}

route(){
    this.app.use('/api/usuario',require('../routes/usuario'));

}

listen(){
    this.app.listen(this.port,()=>{
        console.log(`Este servidor esta corriendo en el puerto ${this.port}`);
    })
}


}


module.exports=Service;