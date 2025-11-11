import app from "./app.js";
import User from "./server/models/user.js";
import Empresa from "./server/models/empresa.js";
import Placa from "./server/models/placa.js";
import Contrato from "./server/models/contrado.js";
import db from "./server/config/db.js"

const port = 3000;

app.get('/', (req, res) => {
    res.send("Wello world")
});

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);

});