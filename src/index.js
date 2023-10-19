import app from "./app.js"
import { sequelize } from "./database/database.js"

async function main(){
    try{
        await sequelize.authenticate()
        console.log("Conexión exitosa")
        app.listen(3000)
    }catch(error){
        console.log("Error de conexión", error)
    }
}

main();