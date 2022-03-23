const { response } = require('express');
const mongoose = require('mongoose');

const app = require('./app'); 

const {API_VERSION , IP_SERVER, PORT_DB,PORT_SERVER} = require('./config'); 

//CONFIGURAMOS CONEXION Y NOMBRAMOS LA BD 
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/ToDoReact` , 
{useNewUrlParser : true},(error,response) => {

    if (error) {
        throw error ;
    } else {

        console.log("la conexion a la base de datos es correcta");

        app.listen(PORT_SERVER , () =>  {
                    console.log("##################################");
                    console.log("##########API_REST################");
                    console.log("##################################");
                    console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);

        })
    }
}) ; 