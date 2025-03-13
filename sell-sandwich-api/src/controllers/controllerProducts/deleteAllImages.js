const fs = require('fs');
const path = require('path');

const deleteAllImages = (req, res) => {
    const uploadsPath = path.resolve(__dirname, '../../../uploads'); // Ruta absoluta

    // Verificar si la carpeta `uploads` existe
    if (!fs.existsSync(uploadsPath)) {
        return res.status(404).json({ error: "Uploads folder not found." });
    }

    // Leer todos los archivos dentro de la carpeta `uploads`
    fs.readdir(uploadsPath, (err, files) => {
        if (err) {
            return res.status(500).json({
                error: "Internal server error. Please try again later.",
                details: err.message,
            });
        }

        // Si no hay archivos, retornar un mensaje
        if (files.length === 0) {
            return res.status(200).json({ message: "No images to delete." });
        }

        // Recorrer y eliminar cada archivo
        files.forEach((file) => {
            const filePath = path.join(uploadsPath, file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(`Error deleting file ${file}:`, err);
                }
            });
        });

        return res.status(200).json({ message: "All images deleted successfully." });
    });
};

module.exports = { deleteAllImages };
