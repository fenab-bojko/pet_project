// interface ISetAnswer {
//     answer: string,
//     question: string,
//     language: string,
//     skill: string
// };

var Answers = require('../answers/index.ts')



async function getAnswers(req, res, next) {
    var rows = await Answers.getAllAnswer()
    res.json(rows);
}
async function setAnswers (req, res, next) {
    const { answer, question, language, skill } = req.body;
    await Answers.setAnswer(answer, question, language, skill);
    res.send('')
}

module.exports.getAnswers = getAnswers;
module.exports.setAnswers = setAnswers;