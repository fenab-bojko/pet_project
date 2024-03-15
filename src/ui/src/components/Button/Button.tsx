import { ButtonHTMLAttributes } from "react";
import "./Button.scss";

export interface IButtonProps {
  children: string;
  onClick: () => void;
  className: string;
}

export function Button(props: IButtonProps): ButtonHTMLAttributes<HTMLButtonElement> {
  const { children, onClick, className } = props;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
