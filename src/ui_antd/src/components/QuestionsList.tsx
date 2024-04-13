import { FC, useState, useEffect, memo } from "react";
import { TQuestion, TUser } from "../model/answer/api";
import { IQuestion, Question } from "./Question";
import { Flex } from "antd";

export interface IQuestionsList {
  isAdmin: TUser["isadmin"];
  dataFilterQuestions: TQuestion[];
}

export const QuestionsList: FC<IQuestionsList> = memo((props) => {
  const { isAdmin, dataFilterQuestions } = props;
  const [questions, setQuestions] = useState<TQuestion[]>([]);

  useEffect(() => {
    setQuestions(dataFilterQuestions);
  }, [dataFilterQuestions]);

  if (questions.length === 0) return <p>Нет данных с сервера</p>;

  return (
    <Flex vertical style={{ padding: "24px" }}>
      {questions.map((question) => {
        return (
          <Question key={question.id} question={question} isAdmin={isAdmin} />
        );
      })}
    </Flex>
  );
});
