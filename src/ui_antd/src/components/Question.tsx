import { FC } from "react";
import { Collapse, Divider, Flex } from "antd";
import { TQuestion } from "../model/answer/api";

interface IQuestion {
  question: TQuestion;
}

export const Question: FC<IQuestion> = (props) => {
  const { question } = props;

  const items = {
    key: question.id,
    label: question.question,
    children: question.answer,
  };

  return (
    <Flex vertical style={{paddingBottom: '5px'}}>
      {/* <Divider orientation="left"></Divider> */}
      <Collapse size="small" items={[items]} />
    </Flex>
  );
};
