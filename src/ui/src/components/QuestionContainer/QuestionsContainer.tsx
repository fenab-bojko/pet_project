import { useState, useEffect, HTMLAttributes } from "react";
import "./QuestionContainer.scss";
import { AnswersApi, TElem } from "../../model/answer/api";
import { Question } from "../Question/Question";

interface IQuestionConteinerProps {
  skill: string;
  type: string;
}
export type THandlerClick = (key: number) => void;

export function QuestionContainer(props: IQuestionConteinerProps) {
  const { skill, type } = props;

  const [visible, setVisible] = useState<number>();
  const [questions, setQuestions] = useState([]);

  const handlerClick: THandlerClick = (key) => {
    setVisible(key);
  };

  const AnswersData = new AnswersApi();

  // загрузка списка вопросов из model/answer/api.ts
  useEffect(() => {
    AnswersData.sortQuestions(type, skill).then((data: TElem[]) => {
      if (data) setQuestions(data);
    });
  }, [type, skill]);

  return (
    <div className="question-container">
      <div className="questions-list">
        <ul>
          {questions.map((elem: TElem) => (
            <Question key={elem.id} elem={elem} visible={visible} handlerClick={handlerClick} />
          ))}
        </ul>
      </div>
    </div>
  );
}
