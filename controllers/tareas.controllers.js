import Tarea from "../database/model/Tarea.js"
export const leerTareas = async (req,res)=>{
    try {
        const tareas = await Tarea.find()
        res.status(200).json(tareas)
        
    } catch (error) {
        console.error(error)
        res.status(404).json({mensaje:"No se encontraron tareas"})
    }
}
export const crearTarea = async (req,res)=>{
    try {
        const tareaNueva =  new Tarea(req.body)
        await tareaNueva.save()
        res.status(200).json(tareaNueva)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje:"No se pudo crear la tarea"})
    }
}

export const eliminarTarea = async(req,res)=>{
    try {
        const tareaElimar = await Tarea.findByIdAndDelete(req.params.id)
        if(!tareaElimar){
            res.status(404).json({Mensaje: "No se encontró la tarea"})
        }
        res.status(200).json({Mensaje: "tarea eliminada"})
    } catch (error) {
        res.status(500).json({Mensaje: "IDFK"})
    }
}

export const editarTarea = async (req,res)=>{
    try {
        const buscarTarea = await Tarea.findById(req.params.id)
        if(!buscarTarea){
            return res.status(404).json({mensaje:"No se encontró la tarea"})
        }
        await Tarea.findByIdAndUpdate(req.params.id,req.body)
    } catch (error) {
        console.error(error)
        
    }
}