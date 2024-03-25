import Content from "./components/Content/Content";
import { Header } from "./components/Header/Header";
import { IModalProps, Modal } from "./components/Modal/Modal";
import { useCallback, useState } from "react";
import { AnswersApi, UserApi } from "./model/answer/api";
import { TContainerProps } from "./components/Content/Content";
import { IMenuProps } from "./components/Menu/Menu";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [auth, setAuth] = useState(false);
  const openModal: TContainerProps["onAddQuestion"] = useCallback(() => setShowModal(true), []);

  const authUser: IMenuProps["authUser"] = (name) => {
    const newUserApi = new UserApi();
    newUserApi.fetchAdd().then((data) => {
      console.log("App>authUser>data>>", data);
      if(data.user_name === name) {
        setAuth(true);
      }
    });
  };

   const sendQuestion: IModalProps["onSendQuestion"] = useCallback(async (question, language, skill, answer, name) => {
    const newAnswerApi = new AnswersApi();
    if (question && name === "admin" && answer) {
      await newAnswerApi.setAnswer(question, language, skill, answer);
      setShowModal(false);
    } else {
      setShowModal(false);
    }
  }, []);

  return (
    <>
      <Modal visible={showModal} onSendQuestion={sendQuestion} />
      <Header />
      <Content onAddQuestion={openModal} authUser={authUser} auth={auth}/>
    </>
  );
}

export default App;
