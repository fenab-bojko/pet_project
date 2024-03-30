// type TSetAnswer = (answer: string, question: string, languege: string, skill: string) => any;
var pgBase = require("../pgbase/index.ts");

async function getAllUser() {
  try {
    const res = await pgBase.client.query(
      "SELECT id, user_name, user_skill,'language' ,user_pass, isauth, isadmin FROM public.account;"
    );
    return res.rows;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function setUser(name, pass, skill) {
  
  try {
    const res = await pgBase.client.query(`INSERT INTO public.account
            (id, user_name, user_skill, "language", user_pass, isauth, isadmin)
            VALUES(nextval('account_id_seq'::regclass), ${name}, ${skill}, '???', ${pass}, false, false);`);
    return res.rows;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports.getAllUser = getAllUser;
module.exports.setUser = setUser;
