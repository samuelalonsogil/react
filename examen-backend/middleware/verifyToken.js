import jwt from 'jsonwebtoken';

const auth = (req, res, next) =>{
    const token = req.header('auth-token');
    !token ? res.status(401).send('access denied'): console.log('access granted');

    try{
        console.log(token);
        console.log(process.env.TOKEN_SECRETO);
        const verified = jwt.verify(token, process.env.TOKEN_SECRETO);
        req.user = verified;
        console.log(verified);
    }catch (err){
        return res.status(400).send('invalid token' + err);
    }
    next();
}

export {auth};