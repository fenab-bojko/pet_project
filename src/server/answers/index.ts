// type TSetAnswer = (answer: string, question: string, languege: string, skill: string) => any;
const pgBase = require("../pgbase/index.ts");

async function getAllAnswer() {
  try {
    const res = await pgBase.client.query(`SELECT id, answer, question, "languege", skill FROM public.answer`);
    return res.rows;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function getFilterAnswer(skill) {
  try {
    const res = await pgBase.client.query(`SELECT id, answer, question, "languege", skill 
                                        FROM public.answer as A
                                        WHERE A.skill = '${skill}'`);
    return res.rows;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function setAnswer(answer, question, id_user, languege, skill) {
  try {
    const res = await pgBase.client.query(
      `INSERT INTO public.answer (id, answer, question, id_user, languege, skill, id_account) 
      VALUES(nextval('answer_id_seq'::regclass), '${answer}', '${question}', '${id_user}', '${languege}', '${skill}', 0)`
    );
    return res.rows;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function delAnswer(id) {
  console.log(typeof id);
  try {
    const res = await pgBase.client.query(
      `DELETE FROM public.answer
      WHERE id='${id}'`
    );
    return res.rows;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports.getAllAnswer = getAllAnswer;
module.exports.getFilterAnswer = getFilterAnswer;
module.exports.setAnswer = setAnswer;
module.exports.delAnswer = delAnswer;
