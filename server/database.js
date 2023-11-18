const mongoose =require('mongoose');
//const URI='mongodb://localhost/mean-crud-prueba'
const URI='mongodb+srv://cristinogomez:va01041970A@cluster0.gfhqwle.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(URI)
    .then(db => console.log('Conectado a DB'))
    .catch(err => console.error(err));
    
module.exports=mongoose;