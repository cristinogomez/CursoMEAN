const express = require('express');
const morgan=require('morgan');
const cors=require('cors');

const app = express();

const {mongoose} = require('./database');

//settings
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: "https://cursomean-production.up.railway.app/"}));

//routes
app.use('/api/bloqueos',require('./routes/bloqueo.routes'));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});