import Content from "./components/Content/Content";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";
import { useCallback, useState } from "react";
import { AnswersApi } from "./model/answer/api";
import { TContainerProps } from "./components/Content/Content";

export type TSendQuestion = (question: string, language: string, skill: string, answer: string, name: string) => void;

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal: TContainerProps["onAddQuestion"] = useCallback(() => setShowModal(true), []);
  const newAnswerApi = new AnswersApi();

  const sendQuestion: TSendQuestion = useCallback((question, language, skill, answer, name) => {
    if (question && name === "admin" && answer) {
      newAnswerApi.setAnswer(question, language, skill, answer);
      setShowModal(false);
    } else {
      setShowModal(false);
    }
  }, []);

  //  Вытащить из модалки данные и передать их в setAnswer

  return (
    <>
      <Modal visible={showModal} onSendQuestion={sendQuestion} />
      <Header />
      <Content onAddQuestion={openModal} />
    </>
  );
}

export default App;
