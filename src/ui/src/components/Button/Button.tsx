import {ButtonHTMLAttributes} from 'react';
import './Button.scss'

interface IButtonProps {
    children: string,
    onClick:() => void,
    className: string
}

export default function Button (props: IButtonProps): ButtonHTMLAttributes<HTMLButtonElement> {
    
    const {children, onClick, className} = props;

    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}