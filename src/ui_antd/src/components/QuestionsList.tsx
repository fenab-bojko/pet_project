import { FC, useState, useEffect, memo } from "react";
import { TQuestion, TUser } from "../model/answer/api";
import { Question } from "./Question";
import { Flex } from "antd";
import { TFilter } from "./ConteinerFilter";

export interface IQuestionsList {
  isAdmin: TUser["isadmin"];
  dataFilterQuestions: TQuestion[];
  sendFilter: TFilter['lesson'];
}

export const QuestionsList: FC<IQuestionsList> = memo((props) => {
  const { isAdmin, dataFilterQuestions, sendFilter } = props;
  const [questions, setQuestions] = useState<TQuestion[]>([]);


  useEffect(() => {
    if (!sendFilter) return setQuestions(dataFilterQuestions);
    const data = dataFilterQuestions.filter(elem => {
      if(sendFilter === elem.languege) return elem;
    })
    setQuestions(data);
  }, [dataFilterQuestions, sendFilter]);

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
