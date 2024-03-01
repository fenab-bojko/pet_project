import { useState, useEffect, HTMLAttributes } from 'react';
import './QuestionContainer.scss';
import { sortQuestions } from '../../../backend/lib/data.js';

interface IQuestionConteinerProps {
    skill: string,
    type: string
}
type THandlerClick = (key: string) => void;



export default function QuestionContainer (props: IQuestionConteinerProps) {
    const {skill, type} = props;

    const [visible, setVisible] = useState ('')
    const [questions, setQuestions] = useState([])
    
    const handlerClick: THandlerClick = (key) => {
        setVisible(key);
    }

    // загрузка списка вопросов из backend/lib/data.js
    useEffect(() => {
        sortQuestions(type, skill).then((data: string[]) => {
            setQuestions(data);
        })
    }, [type, skill])
    
    return (
        <div className="question-container">
            <div className='questions-list'>
                <ul>
                    {questions.map(elem=>(
                        <li key={elem.id} onClick={() => handlerClick(elem.id)}>
                            <strong>{elem.question}</strong>
                            {visible === elem.id ? <p>{elem.answer}</p> : null}
                        </li>   
                    ))}
                </ul>
            </div>
            
        </div>
    )
}