import { FC } from "react";
import { Collapse, Divider } from "antd";
import { TQuestion } from "../model/answer/api";

interface IQuestion {
  question: TQuestion;
}

export const Question: FC<IQuestion> = (props) => {
  const { question } = props;
  console.log("Question>props>>>", question);

  return <p>{question.question}</p>;
};
