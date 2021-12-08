import multer from "multer";
import path from 'path';

export const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, './uploads');
        },
        filename : function (req, file, cb){
            console.log(file);
            cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
        }
    })
});
