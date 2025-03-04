const express = require('express');
const app = express();
const { routes } = require('./routes/index');
const path = require('path');
const cors = require('cors');

// Configuración de CORS
app.use(cors({
    origin: "*", // Permite solicitudes desde cualquier dominio
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
    exposedHeaders: ["Authorization"], // Permite exponer ciertos encabezados al frontend
    credentials: true, // Habilita envío de cookies y credenciales
    optionsSuccessStatus: 200 // Evita problemas en navegadores antiguos
}));

// Middleware para procesar JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (imagenes subidas)
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

console.log("Sirviendo archivos desde:", path.resolve(__dirname, 'uploads'));

// Rutas de la API
app.use("/", routes);

module.exports = { app };