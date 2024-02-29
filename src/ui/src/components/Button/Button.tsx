import {ButtonHTMLAttributes} from 'react';
import { ButtonProps } from '../../../models/interfase';
import './Button.scss'

export default function Button (props: ButtonProps): ButtonHTMLAttributes<HTMLButtonElement> {
    
    const {children, onClick, className} = props;

    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}