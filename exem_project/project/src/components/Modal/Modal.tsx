import './Modal.scss'
import Button from "../Button/Button";
import { useState } from 'react';
import { ModalProps } from '../../../models/interfase';


export default function Modal (props: ModalProps) {
    const {visible, onSendQuestion} = props
   
    const [name, setName] = useState('');
    const [skill, setSkill] = useState('junior');
    const [topic, setTopic] = useState('html')
    const [textQuestion, setTextQuestion] = useState('')
    const [textAnswer, setTextAnswer] = useState('')


    return (
        <div className={'fade ' + (!visible ? 'hidden' : '')}>
            <div className="modal">
                <form >
                    <input name='name' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Введите имя'/>
                    <select name="skill" id="selectSkill" value={skill} onChange={(e) => setSkill(e.target.value)}>
                        <option value="junior">Junior</option>
                        <option value="midle">Midle</option>
                    </select>
                    <select name="topic" id="selectTopic" value={topic} onChange={(e)=>{setTopic(e.target.value)}}>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="js">JavaScript</option>
                        <option value="git">Git</option>
                        <option value="php">PHP</option>
                        <option value="react">ReactJS</option>
                        <option value="algorithm">Algorithm</option>
                    </select>
                    <textarea name="textQuestion" id="modalQuestion" cols="30" rows="10" value={textQuestion} onChange={(e)=>{setTextQuestion(e.target.value)}} placeholder='Введите вопрос'>{textQuestion}</textarea>
                    <textarea name="textAnswer" id="modalAnswer" cols="30" rows="10" value={textAnswer} onChange={(e)=>{setTextAnswer(e.target.value)}} placeholder='Введите ответ'>{textAnswer}</textarea>

                    <Button  className='button' onClick={()=>{onSendQuestion(textQuestion, topic, skill, textAnswer, name)}}>Отправить</Button>
                    <Button  className='button' onClick={()=>{onSendQuestion(textQuestion, topic, skill, textAnswer)}}>Закрыть</Button>
                </form>
            </div>
        </div>
    )
}