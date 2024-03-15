import { FC } from "react";
import "./Question.scss";
import { THandlerClick } from "../QuestionContainer/QuestionsContainer";
import { TElem } from "../../../backend/lib/data";

type TQuestionProps = {
  elem: TElem[];
  visible: string;
  handlerClick: THandlerClick;
};

export const Question: FC<TQuestionProps> = (props) => {
  const {elem, visible, handlerClick} = props;
  return (
    <li key={elem.id} onClick={() => handlerClick(elem.id)}>
      <strong>{elem.question}</strong>
      {visible === elem.id ? <p>{elem.answer}</p> : null}
    </li>
  );
};
