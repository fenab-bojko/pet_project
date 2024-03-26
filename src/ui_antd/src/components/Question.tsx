import { FC } from "react";
import { Collapse, Divider } from "antd";
import { TQuestion } from "../model/answer/api";

interface IQuestion {
  question: TQuestion;
}

export const Question: FC<IQuestion> = (props) => {
  const { question } = props;
  console.log('Question>props>>>', question);
  return (
    <>
      <Divider orientation="left">{question.question}</Divider>
      <Collapse items={[{ key: "1", label: "This is default size panel header", children: <p>{question.answer}</p> }]} />
    </>
  );
};
