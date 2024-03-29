import { FC, useState, useEffect, memo } from "react";
import { TQuestion } from "../model/answer/api";
import { AnswersApi } from "../model/answer/api";
import { Question } from "./Question";

export const QuestionsList: FC = memo(() => {
  const [questions, setQuestions] = useState<TQuestion[]>([]);

  useEffect(() => {
    const AnswersData = new AnswersApi(); // загрузка списка вопросов из model/answer/api.ts

    AnswersData.sortQuestions()
      .then(async (data: TQuestion[]) => {
        if (data) setQuestions(data);
      })
      .catch(() => {
        setQuestions([]);
      });
  }, []);

  if (questions.length === 0) return <p>LLLL</p>;

  return (
    <>
      {questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </>
  );
});
