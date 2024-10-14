import express from "express";
import cors from "cors";
import morgan from "morgan";
import tareasRouter from "./routes/tareas.routes.js";
import path from "path"
import { fileURLToPath } from "url";
const app = express();
import "./database/databaseconnection.js"
app.set("port", process.env.MONGODB|| 4000);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json()); 

app.listen(app.get("port"),
  () => {
    console.log("estoy escuchando el puerto :" + app.get("port"));
  });
app.use(express.urlencoded({ extended: true })); //interpreta datos enviados en formularios

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname,"public")))//configuramos un archivo estatico para ver el index en la ruta principal
app.use("/api",tareasRouter)