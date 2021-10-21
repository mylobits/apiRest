const mongoose=require('mongoose');

const dataconection= async()=>{

try {

    await mongoose.connect(process.env.MONGOOSE_DB);

    console.log('Base de datos online');
    
} catch (error) {

    throw new Error('base de datos no conectada')
    
}
}

module.exports={
    dataconection
}