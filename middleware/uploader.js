import multer from "multer";
import path from 'path';

export const uploader = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, './uploads');
        },
        filename : function (req, file, cb){
            const filename = file.originalname.split('.')[0] + '-' + Date.now() + path.extname(file.originalname)
            req.locals.url = filename;

            console.log(filename);
            cb(null, file.originalname.split('.')[0] + '-' + Date.now() + path.extname(file.originalname))
        }
    })
});
