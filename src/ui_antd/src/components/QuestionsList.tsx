import { FC, useState, useEffect, memo } from "react";
import { TQuestion, TUser } from "../model/answer/api";
import { QuestionsApi } from "../model/answer/api";
import { IQuestion, Question } from "./Question";
import { Flex } from "antd";

export interface IQuestionsList {
  renderQuestions: number;
  isAdmin: TUser['isadmin'];
  onRenderQuestions: IQuestion["onRenderQuestions"];
}

export const QuestionsList: FC<IQuestionsList> = memo((props) => {
  const { renderQuestions, isAdmin, onRenderQuestions } = props;
  const [questions, setQuestions] = useState<TQuestion[]>([]);

  useEffect(() => {
    const QuestionsData = new QuestionsApi(); // загрузка списка вопросов из model/answer/api.ts
    QuestionsData.sortQuestions()
      .then(async (data: TQuestion[]) => {
        if (data) setQuestions(data);
      })
      .catch(() => {
        setQuestions([]);
      });
  }, [renderQuestions]);

  if (questions.length === 0) return <p>Нет данных с сервера</p>;

  return (
    <Flex vertical style={{ padding: "24px" }}>
      {questions.map((question) => {
        return <Question key={question.id} question={question} isAdmin={isAdmin} onRenderQuestions={onRenderQuestions} />;
      })}
    </Flex>
  );
});
