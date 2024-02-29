import './Content.scss';
import { ContainerProps } from '../../../models/interfase';
import QuestionContainer from "../QuestionContainer/QuestionsContainer";
import Menu from '../Menu/Menu';
import { memo, useState } from 'react';

const Content = memo(function Content (props: ContainerProps) {
    const {onAddQuestion} = props;

    const [sortQuestions, setSortQuestion] = useState('questions')
    const [skillQuestion, setSkillQuestion] = useState('junior')

    const onSortQuestion = (type: string): void => {
        // console.log(type)
        setSortQuestion(type);
    }

    const onSkillQuestion = (skill: string): void => {
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
