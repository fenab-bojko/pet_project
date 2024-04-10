import { FC, CSSProperties, useState, ChangeEvent } from "react";
import { Modal, Select, Input } from "antd";
import { TQuestion, TUser } from "../model/answer/api";

const { TextArea } = Input;

export interface IModalContentProps {
  isModalOpen: boolean;
  onHandleCancel: () => void;
  typeModal: string;
  addNewUser: (newUser: TUser) => void;
  addNewQuestion: (newQuestion: TQuestion) => void;
  user?: TUser;
}

type TOnHandleOk = (type: string) => void;
type TOnHandleChange = (type: string, e: ChangeEvent<HTMLInputElement>) => void;
type TOnHandleChangeSelect = (value: string) => void;

const selectStyle: CSSProperties = {
  width: "100%",
};

const modalStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

export const ModalComponent: FC<IModalContentProps> = (props) => {
  const { isModalOpen, onHandleCancel, typeModal, user, addNewUser, addNewQuestion } = props;

  const [newQuestion, setNewQuestion] = useState<TQuestion>();
  const [newUser, setNewUser] = useState<TUser>();

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
    if (type === "registration") {
      console.log("Modal>onHandleOk>newUser>>>", newUser);
      if (newUser) addNewUser(newUser);
    }
    if (type === "question") {
      if (newQuestion) addNewQuestion(newQuestion);
    }
    onHandleCancel();
  };

  const onHandleChange: TOnHandleChange = (type, e) => {
    if (type === "name" && typeof e !== "string") {
      setNewUser({ ...newUser, user_name: e.target.value });
    }
    if (type === "pass" && typeof e !== "string") {
      setNewUser({ ...newUser, user_pass: e.target.value });
    }
  };

  const onHandleChangeSelect: TOnHandleChangeSelect = (value) => {
    if (value) setNewUser({ ...newUser, user_skill: value });
  };

  return (
    <>
      {typeModal === "question" ? (
        <Modal
          title="Добавить вопрос"
          open={isModalOpen}
          onOk={() => onHandleOk("question")}
          onCancel={onHandleCancel}
          style={modalStyle}
        >
          <Input type="text" defaultValue={user?.user_name} placeholder="Введите имя" />
          <Select
            style={selectStyle}
            defaultValue={user?.user_skill}
            options={optionSkill}
            placeholder="Уровень сложности"
          />
          <Select
            style={selectStyle}
            options={optionLanguage}
            placeholder="Тема вопроса"
            onChange={(value) => setNewQuestion({ ...newQuestion, languege: value })}
          />
          <TextArea
            onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
            rows={5}
            placeholder="Введите вопрос"
          />
          <TextArea
            onChange={(e) => setNewQuestion({ ...newQuestion, answer: e.target.value })}
            rows={5}
            placeholder="Введите ответ"
          />
        </Modal>
      ) : (
        <Modal
          title="Регистрация"
          open={isModalOpen}
          onOk={() => onHandleOk("registration")}
          onCancel={onHandleCancel}
          style={modalStyle}
        >
          <Input type="text" onChange={(e) => onHandleChange("name", e)} placeholder="Введите имя" />
          <Input.Password type="text" onChange={(e) => onHandleChange("pass", e)} placeholder="Введите пароль" />
          <Select
            style={selectStyle}
            onChange={(value) => onHandleChangeSelect(value)}
            options={optionSkill}
            placeholder="Уровень подготовки"
          />
        </Modal>
      )}
    </>
  );
};
