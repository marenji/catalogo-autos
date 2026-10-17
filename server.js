
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Bienvenido al catalogo de autos");
});


const autos = [
    {
        marca: "Toyota",
        modelo: "Corolla",
        anio: 2023,
        precio: 350000,
        color: "Blanco"
    },
    {
        marca: "Nissan",
        modelo: "Versa",
        anio: 2022,
        precio: 280000,
        color: "Rojo"
    },
    {
        marca: "Volkswagen",
        modelo: "Jetta",
        anio: 2024,
        precio: 420000,
        color: "Negro"
    },
    {
        marca: "Mazda",
        modelo: "Mazda 3",
        anio: 2023,
        precio: 390000,
        color: "Azul"
    },
    {
        marca: "Kia",
        modelo: "Rio",
        anio: 2021,
        precio: 250000,
        color: "Gris"
    }
];


app.get("/autos", (req, res) => {
    res.json(autos);
});


app.get("/autos/marca/:marca", (req, res) => {

    const marcaBuscada = req.params.marca;
    
    if (marcaBuscada.length > 30) {
       return res.status(400).json({
          mensaje: "La marca no puede tener mas de 30 caracteres"
    });
}


    const resultado = autos.filter(auto =>
        auto.marca.toLowerCase() === marcaBuscada.toLowerCase()
    );

    if (resultado.length === 0) {
        return res.status(404).json({
            mensaje: "No se encontraron autos de esa marca"
        });
    }

    res.json(resultado);
});


app.listen(PORT, () => {
    console.log("Servidor funcionando en el puerto " + PORT);
});
