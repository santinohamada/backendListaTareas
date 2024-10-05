import { Router } from "express";
import { leerTareas,crearTarea, eliminarTarea, editarTarea } from "../controllers/tareas.controllers.js";
const router = Router()
router.route("/tareas").get(leerTareas).post(crearTarea)
router.route("/tareas/:id").delete(eliminarTarea).put(editarTarea)
export default router