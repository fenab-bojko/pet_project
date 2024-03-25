import { FC, CSSProperties, useState } from "react";
import { Modal, Select, Input } from "antd";
import { TUser } from "../model/answer/api";

const { TextArea } = Input;

export interface IModalContentProps {
  isModalOpen: boolean;
  onHandleCancel: () => void;
  typeModal: string;
  addNewUser: () => void;
  user?: TUser;
  // eslint-disable-next-line no-empty-pattern
  setNewUser: ({}: TUser) => void;
}

type TOnHandleOk = (type: string) => void;

const selectStyle: CSSProperties = {
  width: "100%",
};

export const ModalComponent: FC<IModalContentProps> = (props) => {
  const { isModalOpen, onHandleCancel, setNewUser, typeModal, user, addNewUser } = props;

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newUserPass, setNewUserPass] = useState('');
  const [newUserSkill, setNewUserSkill] = useState('');

  const optionSkill = [
    { value: "junior", label: "Junior" },
    { value: "midle", label: "Midle" },
  ];

  const optionLanguage = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "js", label: "JavaScript" },
    { value: "git", label: "Git" },
  ];

  const onHandleOk: TOnHandleOk = (type) => {
    if (type === 'registration') {
        setNewUser({
            user_name: {newUserName},
            user_pass: {newUserPass},
            user_skill: {newUserSkill},
            isadmin: false,
        })
        addNewUser();
    }
    onHandleCancel();
  }

  return (
    <>
      {typeModal === "question" ? (
        <Modal title="Добавить вопрос" open={isModalOpen} onOk={()=>onHandleOk('question')} onCancel={onHandleCancel}>
          <Input type="text" defaultValue={user?.user_name} placeholder="Введите имя" />
          <Select style={selectStyle} defaultValue={user?.user_skill} options={optionSkill} placeholder='Уровень сложности' />
          <Select style={selectStyle} options={optionLanguage} placeholder='Тема вопроса' />
          <TextArea onChange={(e) => setQuestion(e.target.value)} rows={5} placeholder="Введите вопрос" />
          <TextArea onChange={(e) => setAnswer(e.target.value)} rows={5} placeholder="Введите ответ"/>
        </Modal>
      ) : (
        <Modal title="Регистрация" open={isModalOpen} onOk={() => onHandleOk('registration')} onCancel={onHandleCancel}>
          <Input type="text" onChange={(e) => setNewUserName(e.target.value)} placeholder="Введите имя" />
          <Input.Password onChange={(e) => setNewUserPass(e.target.value)} placeholder="Введите пароль" />
          <Select style={selectStyle} onChange={() => setNewUserSkill('junior')} options={optionSkill} placeholder='Уровень подготовки' />
        </Modal>
      )}
    </>
  );
};
