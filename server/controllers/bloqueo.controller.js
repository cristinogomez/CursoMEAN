//const bloqueo = require('../models/bloqueo');
const Bloqueo = require('../models/bloqueo');
const bloqueoCtrl = {};

bloqueoCtrl.getBloqueos = async (req,res) => {
    const bloqueos = await Bloqueo.find();
    res.json(bloqueos);
};

bloqueoCtrl.createBloqueo = async (req,res) => {
    const bloqueo = new Bloqueo({
        cantidad:req.body.cantidad,
        fecha:req.body.fecha,
        medico:req.body.medico
    });
    await bloqueo.save();
    res.json({
        Status:'Bloqueo guardado'
    });
}

bloqueoCtrl.editBloqueo = async (req,res) => { 
    const{ id } = req.params;
    const bloqueo = {
        cantidad:req.body.cantidad,
        fecha:req.body.fecha,
        medico:req.body.medico
    };
    await Bloqueo.findByIdAndUpdate(id, {$set: bloqueo},{new: true});
    res.json({Status:'Bloqueo editado'});
};

bloqueoCtrl.deleteBloqueo = async (req,res) =>{
    await Bloqueo.findByIdAndRemove(req.params.id);
    res.json({Status: 'Bloqueo eliminado'});
};


bloqueoCtrl.getBloqueo = async (req,res) => {
    const bloqueo = await Bloqueo.findById(req.params.id);
    res.json(bloqueo);
};

module.exports = bloqueoCtrl;