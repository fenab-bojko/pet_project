import './Content.scss';
import QuestionContainer from "../QuestionContainer/QuestionsContainer";
import Menu from '../Menu/Menu';
import { memo, useState } from 'react';

interface IContainerProps {
    onAddQuestion: () => void
}
export interface ISortQuestion {
    onSortQuestion: (type: string) => void;
    onSkillQuestion: (skill: string) => void;
}

const Content = memo(function Content (props: IContainerProps) {
    const { onAddQuestion } = props;

    const [sortQuestions, setSortQuestion] = useState('questions')
    const [skillQuestion, setSkillQuestion] = useState('junior')

    const onSortQuestion: ISortQuestion['onSortQuestion'] = (type) => {
        // console.log(type)
        setSortQuestion(type);
    }

    const onSkillQuestion: ISortQuestion['onSkillQuestion'] = (skill) => {
        setSkillQuestion(skill);
    }

    
    return (
        <div className="content">
            <Menu onAddQuestion={ onAddQuestion } onClick={ onSortQuestion } onSkillQuestion={ onSkillQuestion }/>
            <QuestionContainer type={ sortQuestions } skill={ skillQuestion }/>
        </div>
    )
})

export default Content;
