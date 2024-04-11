var Answers = require("../answers/index.ts");

async function getAnswers(req, res, next) {
  var rows = await Answers.getAllAnswer();
  res.json(rows);
}
async function setAnswers(req, res, next) {
  const { answer, question, id_user, language, skill } = req.body;
  await Answers.setAnswer(answer, question, id_user, language, skill);
  res.send("");
}
async function delAnswers(req, res) {
  const QuestionId = Number(req.params.id);
  await Answers.delAnswer(QuestionId);
  res.send(`Question ${QuestionId}>>>DELETE`);
}

module.exports.getAnswers = getAnswers;
module.exports.setAnswers = setAnswers;
module.exports.delAnswers = delAnswers;


