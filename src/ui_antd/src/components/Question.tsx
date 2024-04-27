import { FC, useCallback } from "react";
import { Collapse, Flex } from "antd";
import { QuestionsApi, TQuestion, TUser } from "../model/answer/api";
import { DeleteOutlined } from "@ant-design/icons";

export interface IQuestion {
  question: TQuestion;
  isAdmin: TUser["isadmin"];
}

export const Question: FC<IQuestion> = (props) => {
  const { question, isAdmin } = props;

  const items = {
    key: question.id,
    label: question.question,
    children: question.answer,
  };

  const deleteQuestion = useCallback(() => {
    const newQuestionData = new QuestionsApi();
    newQuestionData.delQuestion(question.id);
  }, [question.id]);

  return (
    <Flex vertical style={{ paddingBottom: "5px" }}>
      <Flex style={{ gap: "5px" }}>
        <Collapse size="small" items={[items]} style={{ width: "100%" }} />
        {isAdmin && <DeleteOutlined onClick={deleteQuestion} />}
      </Flex>
    </Flex>
  );
};
