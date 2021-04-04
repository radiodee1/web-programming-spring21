/* 

*/

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const SALT_ROUNDS = process.env.SALT_ROUNDS ;
const JWT_SECRET = process.env.JWT_SECRET ;

const list = [
    { 
        firstName: 'Moshe',
        lastName: 'Plotkin',
        handle: '@JewPaltz',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'Me',
    },
    { 
        firstName: 'Kamala',
        lastName: 'Harris',
        handle: '@vp',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'Her',
    },
    { 
        firstName: 'John',
        lastName: 'Smith',
        handle: '@johnsmith',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'BeepBop',
    },

];

module.exports.GetAll = ()=> list;
module.exports.Get = (user_id)=> list[user_id];
module.exports.GetByHandle = (handle)=> ({ ...list.find( (x, i)=> x.handle == handle ), password: undefined }) ;
module.exports.Add = (user)=> {
    if(!user.firstName){
        throw "First Name is reqired"
    }
     list.push(user);
     return { ...user, password: undefined };
}
module.exports.Register = async (user)=> {

    const hash = await bcrypt.hash(user.password, +SALT_ROUNDS)
    
    user.password = hash;
    if(!user.firstName){
        throw "First Name is reqired"
    }
        list.push(user);
        return { ...user, password: undefined };

}
module.exports.Update = (user_id, user)=> {
    const oldObj = list[user_id];
    if(user.firstName){
        oldObj.firstName = user.firstName;
    }
    if(user.lastName){
        oldObj.lastName = user.lastName;
    }
    if(user.handle){
        oldObj.handle = user.handle;
    }
    if(user.pic){
        oldObj.pic = user.pic;
    }
    //list[user_id] = newObj ;
    return { ...oldObj, password: undefined };
}
module.exports.Delete = (user_id)=> {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}

module.exports.Login = (handle, password) => {
    const user = list.find(x => x.handle == handle && x.password == password);
    if(!user) throw {code: 401, msg: "Wrong Login"};

    const data = { ... user, password: null}
    const token = jwt.sign(data, JWT_SECRET);
    return {user, token};
}

module.exports.FromJWT = async (token) => {
    try{
        const user = jwt.verify(token, JWT_SECRET);
        return user;
    }
    catch (error) {
        console.log(error);
        return null;
    }
    
}