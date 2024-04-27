var express = require("express");
var AnswersController = require("../controllers/getAnswers.ts");
var router = express.Router();

/* GET home page. */
router.get("/", AnswersController.getAnswers);
router.get("/filter", AnswersController.getFilterAnswers);
router.post("/", AnswersController.setAnswers);
router.delete("/:id", AnswersController.delAnswers);

module.exports = router;
