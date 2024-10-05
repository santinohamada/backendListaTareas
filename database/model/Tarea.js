import mongoose, { Schema } from "mongoose";

const TareaSchema = new Schema({
    tarea:{
        type:String,
        required:true,
        minlenght:3,
        maxlenght:20
    }
})
const Tarea = mongoose.model("Tareas",TareaSchema)
export default Tarea