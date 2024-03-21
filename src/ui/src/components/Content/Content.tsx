import "./Content.scss";
import { QuestionContainer } from "../QuestionContainer/QuestionsContainer";
import { Menu, TMenu } from "../Menu/Menu";
import { memo, useCallback, useState, FC } from "react";
import { IMenuProps } from "../Menu/Menu";

export type TContainerProps = {
  onAddQuestion: TMenu["onClick"];
};
export interface ISortQuestion {
  onSortQuestion: IMenuProps["onAddQuestion"];
  onSkillQuestion: IMenuProps["onSkillQuestion"];
}

const Content: FC<TContainerProps> = memo(function Content(props) {
  const { onAddQuestion } = props;

  const [sortQuestions, setSortQuestion] = useState("questions");
  const [skillQuestion, setSkillQuestion] = useState("junior");

  const onSortQuestion: ISortQuestion["onSortQuestion"] = useCallback((type) => {
    setSortQuestion(type);
  }, []);

  const onSkillQuestion: ISortQuestion["onSkillQuestion"] = useCallback((skill) => {
    setSkillQuestion(skill);
  }, []);

  return (
    <div className="content">
      <Menu onAddQuestion={onAddQuestion} onClick={onSortQuestion} onSkillQuestion={onSkillQuestion} />
      <QuestionContainer type={sortQuestions} skill={skillQuestion} />
    </div>
  );
});

export default Content;
