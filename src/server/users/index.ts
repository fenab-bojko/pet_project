var pgBase = require("../pgbase/index.ts")

async function getAllUsers () {  
    try {
        const res = await pgBase.client.query('SELECT id, user_name, user_skill, user_pass, isadmin FROM public.account');
        return res.rows;
    } catch (error) {
        console.error(error);
        return error
    }
}

async function setUser (name, password, skill) {
    try {
        const res = await pgBase.client.query("INSERT INTO public.account (id, user_name, user_skill, user_pass, isadmin) VALUES(nextval('account_id_seq'::regclass), '${name}', '${skill}', {password}, false);")
        return res.rows;
    } catch (error) {
        console.error(error);
        return error
    }
}

module.exports.setAnswer = setAnswer;
module.exports.getAllUsers = getAllUsers;