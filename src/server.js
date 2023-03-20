const express = require("express");
const app = express();
const PORT = 3333;
const router = require("./routes");

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
