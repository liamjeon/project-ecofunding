import multer from "multer";
import path from 'path';

export const uploader = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, './uploads');
        },
        filename : function (req, file, cb){
            //Todo : 서버주소를 filename
            const filename = file.originalname.split('.')[0] + '-' + Date.now() + path.extname(file.originalname)
            req.url = 'localhost:3000/'+filename;
            console.log(req.url);
            cb(null, file.originalname.split('.')[0] + '-' + Date.now() + path.extname(file.originalname))
        }
    })
});