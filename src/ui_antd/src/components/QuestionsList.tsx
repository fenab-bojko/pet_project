import { FC, useState, useEffect, memo } from "react";
import { TQuestion } from "../model/answer/api";
import { QuestionsApi } from "../model/answer/api";
import { Question } from "./Question";
import { Flex } from "antd";

export const QuestionsList: FC = memo(() => {
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
  }, []);

  if (questions.length === 0) return <p>LLLL</p>;

  return (
    <Flex vertical style={{padding: '24px'}}>
      {questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </Flex>
  );
});
