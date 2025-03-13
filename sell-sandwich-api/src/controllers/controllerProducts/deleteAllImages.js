const fs = require('fs')
const deleteAllImages = (req , res) => {
fs.readdir("../../../uploads",(err, images)=>{
    if(!err){
        images.forEach((imagen) => {
            console.log(imagen);
            
        }
      )
      res.status(200).json({
        images
    }
    )
    }else{
        return res.status(500).json({
            error: "Internal server error. Please try again later.",
            details: err.message,
        });
    }
    
        
    
    
})
}

module.exports = {
    deleteAllImages
}