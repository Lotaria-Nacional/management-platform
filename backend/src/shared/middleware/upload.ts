import multer from "multer"
import path from "path"

const storage = multer.diskStorage({ 
    destination:(req,file, cb)=>{
        cb(null, "uploads/")
    },
    filename:(req, file, cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`)
    }
 })

 export const upload = multer({
    storage,
    fileFilter:(req,file,cb)=>{
        const ext = path.extname(file.originalname)
        if(ext !== ".csv"){
            return cb(new Error("Only .csv files allowed."))
        }
        cb(null, true)
    }
})

