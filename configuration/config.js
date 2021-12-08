import dotenv from 'dotenv';
dotenv.config();

export const config = {
    jwt: {
        secretKey: process.env.JWT_SECRET,
        expriersDays: process.env.JWT_EXPIRES_DAYS,
    },
    bcrypt:{
        saltRounds: process.env.BCRYPT_SALT_ROUNDS,
    },
    uploader:{
        host: process.env.UPLOADER_HOST,
    },
    node:{
        production: process.env.NODE_ENV,
    }
}