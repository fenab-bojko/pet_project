import { ISetAnswer } from "../model/interface";

var Answers = require('../answers/index')

async function getAnswers(req, res, next) {
    var rows = await Answers.getAllAnswers()
    res.json(rows);
}
async function setAnswer (req, res, next) {
    const { answer, question, language, skill }: ISetAnswer = req.body;
    await Answers.setAnswer(answer, question, language, skill);
    res.send('')
}

module.exports.getAnswers = getAnswers;
module.exports.setAnswer = setAnswer;