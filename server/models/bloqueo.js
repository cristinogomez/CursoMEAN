const  mongoose = require("mongoose");

const {Schema}=mongoose;

const BloqueoSchema = new Schema({
    cantidad: { type: Number, required:true },
    fecha: { type: String, required:true },
    medico: { type:String, required:true }
});

module.exports=mongoose.model('Bloqueo',BloqueoSchema);
