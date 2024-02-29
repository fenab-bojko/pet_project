import {ButtonHTMLAttributes} from 'react';
import { IButtonProps } from '../../../models/interfase';
import './Button.scss'

export default function Button (props: IButtonProps): ButtonHTMLAttributes<HTMLButtonElement> {
    
    const {children, onClick, className} = props;

    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}