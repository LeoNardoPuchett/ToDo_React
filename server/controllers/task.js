// traemos el modelo de tarea 
const Task = require('./../models/task')

//funcion para crear nueva tarea
function newTask(request,response){

    const task = new Task();

    const {description,title,date} = request.body ; 

    task.status = "pending";
    task.title= title;
    task.description=description;
    //inicializamos la tarea con la fecha actual
    task.date = new Date();
  
    task.save((error,taskStored) => {
        if (error){
            response.status(500).send({
                message:"Error en el servidor"
            })
        } else {
            if(!taskStored){
                response.status(404).send({
                    message:"Error al crear tarea"
                })
            } else {
                response.status(200).send({task:taskStored})
            }
        }
    })



} 



module.exports = {
    newTask
}
