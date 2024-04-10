import { FC, useState, useEffect } from "react";
import { Layout, Flex } from "antd";
import { HeaderComponent } from "./components/Header";
import { SiderComponent } from "./components/Sider";
import { ContentComponent } from "./components/Content";
import { TQuestion, TUser } from "./model/answer/api";
import { IContainerAuthUserProps } from "./components/ConteinerAuthUser";
import { UserApi, QuestionsApi } from "./model/answer/api";
import { IModalContentProps, ModalComponent } from "./components/Modal";

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "1440px",
};

export const App: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [user, setUser] = useState<TUser>();



  const onAuthUser: IContainerAuthUserProps["onAuthUser"] = async (name, password) => {
    const newUserApi = new UserApi();
    await newUserApi.authUser(name, password).then((user) => {
      setIsAuth(true);
      setUser(user[0]);
    });
  };

  const onShowModal: IContainerAuthUserProps["onShowModal"] = (type) => {
    setIsModalOpen(true);
    setTypeModal(type);
  };

  const onHandleCancel: IModalContentProps["onHandleCancel"] = () => {
    setIsModalOpen(false);
  };

  const addNewUser = async (newUser: TUser) => {
    const {user_name, user_pass, user_skill} = newUser;
    const newUserApi = new UserApi();
    if (newUser) await newUserApi.setUser(user_name, user_pass, user_skill);
  };

  const addNewQuestion = async (newQuestion: TQuestion) => {
    const QuestionsData = new QuestionsApi();
    if (newQuestion) await QuestionsData.setQuestion(newQuestion.question, newQuestion.languege, newQuestion.skill, newQuestion.answer)
  }

  return (
    <Flex gap="middle" wrap="wrap">
      <ModalComponent
        isModalOpen={isModalOpen}
        addNewUser={addNewUser}
        addNewQuestion={addNewQuestion}
        onHandleCancel={onHandleCancel}
        typeModal={typeModal}
        user={user}
      />
      <Layout style={layoutStyle}>
        <HeaderComponent />
        <Layout>
          <SiderComponent onAuthUser={onAuthUser} isAuth={isAuth} onShowModal={onShowModal} user={user} />
          <ContentComponent />
        </Layout> 
      </Layout>
    </Flex>
  );
};
