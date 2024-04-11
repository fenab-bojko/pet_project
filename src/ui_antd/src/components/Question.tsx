import { FC } from "react";
import { Collapse, Flex } from "antd";
import { QuestionsApi, TQuestion } from "../model/answer/api";
import { ISiderComponentProps } from "./Sider";
import { DeleteOutlined } from "@ant-design/icons";

export interface IQuestion {
  question: TQuestion;
  isAuth: ISiderComponentProps["isAuth"];
  onRenderQuestions: () => void;
}

export const Question: FC<IQuestion> = (props) => {
  const { question, isAuth, onRenderQuestions } = props;

  const items = {
    key: question.id,
    label: question.question,
    children: question.answer,
  };

  const deleteQuestion = () => {
    const newQuestionData = new QuestionsApi();
    newQuestionData.delQuestion(question.id);
    onRenderQuestions();
  };

  return (
    <Flex vertical style={{ paddingBottom: "5px" }}>
      <Flex style={{ gap: "5px" }}>
        <Collapse size="small" items={[items]} style={{ width: "100%" }} />
        {isAuth && <DeleteOutlined onClick={deleteQuestion} />}
      </Flex>
    </Flex>
  );
};
