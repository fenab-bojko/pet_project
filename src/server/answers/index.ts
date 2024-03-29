// type TSetAnswer = (answer: string, question: string, languege: string, skill: string) => any;
var pgBase = require("../pgbase/index.ts");

async function getAllAnswer() {
  try {
    const res = await pgBase.client.query("SELECT id, answer, question, languege, skill FROM public.answer");
    return res.rows;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function setAnswer(answer: string, question: string, languege: string, skill: string) {
  try {
    const res = await pgBase.client.query(
      `INSERT INTO public.answer (id, answer, question, "date", id_user, languege, skill, id_account) VALUES(nextval('answer_id_seq'::regclass), '${answer}', '${question}', '2024-02-13', 0, '${languege}', '${skill}', 0);`
    );
    return res.rows;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports.getAllAnswer = getAllAnswer;
module.exports.setAnswer = setAnswer;