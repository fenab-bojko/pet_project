export interface ButtonProps {
    children: string,
    onClick:() => void,
    className: string
}

export interface QuestionConteinerProps {
    skill: string,
    type: string
}

export interface ModalProps {
    visible: boolean,
    onSendQuestion: () => void
}

export interface MenuProps {
    onAddQuestion: () => void,
    onClick: (type: string) => void,
    onSkillQuestion: (type: string) => void
}

export interface ContainerProps {
    onAddQuestion: () => void
}