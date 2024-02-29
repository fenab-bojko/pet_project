import './Menu.scss';
import { MenuProps } from '../../../models/interfase';
import Button from "../Button/Button";
import { useState } from 'react';





export default function Menu (props: MenuProps) {
    const {onAddQuestion, onClick, onSkillQuestion} = props;

    const [active, setActive] = useState('junior')
    const [submenuAct, setSubmenuAct] = useState('questions') 

    function handleClick (type) {
        setActive(type);
        setSubmenuAct('questions');
        onSkillQuestion(type);
        
    }
  
    const submenuClicked = (type) => {
        setSubmenuAct(type);
        onClick(type);
        }
    

    
        return (

        <div className="menu-container" type={submenuAct}>

            <form action="localhost:5173" method='post'>
                <input type="text" placeholder='Name'/>
                <input type="password" placeholder='Password'/>
                <Button type='submit' className='button'>Войти</Button>
            </form>
            <hr></hr>
            <div className="menu">
                <Button className={"button " + (active === 'junior' ? 'primory' : '')} onClick={()=>handleClick('junior')}>Junior</Button>
                <Button className={"button " + (active === 'midle' ? 'primory' : '')} onClick={()=>handleClick('midle')}>Midle</Button>
            </div>
            <div className={'submenu junior ' + (active === 'junior' ? '' : 'hidden')}>
                <Button className={"button " + (submenuAct === 'html' ? 'primory' : '')} onClick={()=>submenuClicked('html')}>HTML</Button>
                <Button className={"button " + (submenuAct === 'css' ? 'primory' : '')} onClick={()=>submenuClicked('css')}>CSS</Button>
                <Button className={"button " + (submenuAct === 'js' ? 'primory' : '')} onClick={()=>submenuClicked('js')}>JavaScript</Button>
                <Button className={"button " + (submenuAct === 'git' ? 'primory' : '')} onClick={()=>submenuClicked('git')}>Git</Button>
                <Button className={"button " + (submenuAct === 'questions' ? 'primory' : '')} onClick={()=>submenuClicked('questions')}>All questions</Button>
            </div>
            <div className={'submenu midle ' + (active === 'midle' ? '' : 'hidden')}>
                <Button className={"button " + (submenuAct === 'git' ? 'primory' : '')} onClick={()=>submenuClicked('git')}>Git</Button>
                <Button className={"button " + (submenuAct === 'database' ? 'primory' : '')} onClick={()=>submenuClicked('database')}>DataBase</Button>
                <Button className={"button " + (submenuAct === 'react' ? 'primory' : '')} onClick={()=>submenuClicked('react')}>ReactJS</Button>
                <Button className={"button " + (submenuAct === 'algorithm' ? 'primory' : '')} onClick={()=>submenuClicked('algorithm')}>Algorithm</Button>
                <Button className={"button " + (submenuAct === 'questions' ? 'primory' : '')} onClick={()=>submenuClicked('questions')}>All questions</Button>
            </div>
            <hr></hr>
            
                <Button className='button' onClick={onAddQuestion}>Задать вопрос</Button>
            
        </div>
            
    )
}