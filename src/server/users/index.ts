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
        const res = await pgBase.client.query(`INSERT INTO public.account (id, user_name, user_skill, "language", user_pass, isauth, isadmin)
                                                VALUES(nextval('account_id_seq'::regclass), '${name}', '${skill}', 'html', '${password}', false, false);`)
        return res.rows;
    } catch (error) {
        console.error(error);
        return error
    }
}

module.exports.setUser = setUser;
module.exports.getAllUsers = getAllUsers;