import { FC, useState, useEffect, memo } from "react";
import { TQuestion } from "../model/answer/api";
import { QuestionsApi } from "../model/answer/api";
import { IQuestion, Question } from "./Question";
import { Flex } from "antd";
import { ISiderComponentProps } from "./Sider";

export interface IQuestionsList {
  renderQuestions: number;
  isAuth: ISiderComponentProps["isAuth"];
  onRenderQuestions: IQuestion["onRenderQuestions"];
}

export const QuestionsList: FC<IQuestionsList> = memo((props) => {
  const { renderQuestions, isAuth, onRenderQuestions } = props;
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

  if (questions.length === 0) return <p>LLLL</p>;

  return (
    <Flex vertical style={{ padding: "24px" }}>
      {questions.map((question) => {
        return <Question key={question.id} question={question} isAuth={isAuth} onRenderQuestions={onRenderQuestions} />;
      })}
    </Flex>
  );
});
