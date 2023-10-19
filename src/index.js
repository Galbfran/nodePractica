import app from "./app.js"
import { sequelize } from "./database/database.js"


import "./models/Project.js"
async function main(){
    try{
        await sequelize.sync()
        console.log("Conexión exitosa")
        app.listen(3000)
    }catch(error){
        console.log("Error de conexión", error)
    }
}

main();