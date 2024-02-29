import './Content.scss';
import { IContainerProps, ISortQuestion } from '../../../models/interfase';
import QuestionContainer from "../QuestionContainer/QuestionsContainer";
import Menu from '../Menu/Menu';
import { memo, useState } from 'react';

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
