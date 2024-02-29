import { useState, useEffect, HTMLAttributes } from 'react';
import { IQuestionConteinerProps } from '../../../models/interfase';
import { THandlerClick } from '../../../models/type';
import './QuestionContainer.scss';
import { sortQuestions } from '../../../backend/lib/data.js';



export default function QuestionContainer (props: IQuestionConteinerProps) {
    const {skill, type} = props;

    const [visible, setVisible] = useState ('')
    const [questions, setQuestions] = useState([])
    
    const handlerClick: THandlerClick = (key) => {
        setVisible(key);
    }
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
                            <p className={visible === elem.id ? '' : 'hidden'}>{elem.answer}</p>
                        </li>   
                    ))}
                </ul>
            </div>
            
        </div>
    )
}