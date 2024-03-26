import { FC } from "react";
import { TQuestion } from "../model/answer/api";
import { Question } from "./Question";

interface IQuestionsList {
  questions: TQuestion[];
}

export const QuestionsList: FC<IQuestionsList> = (props) => {
  const { questions } = props;

  return (
    <>
      {questions.map((question) => {
        <Question key={question.id} question={question} />;
      })}
    </>
  );
};
