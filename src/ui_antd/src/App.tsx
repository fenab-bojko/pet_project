import { FC, useCallback, useState } from "react";
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
  const [renderQuestions, setRenderQuestions] = useState(0);

  const onAuthUser: IContainerAuthUserProps["onAuthUser"] = useCallback(async (name, password) => {
    const newUserApi = new UserApi();
    await newUserApi.authUser(name, password).then((user) => {
      setIsAuth(true);
      setUser(user[0]);
    });
  }, []);

  const onShowModal: IContainerAuthUserProps["onShowModal"] = useCallback((type) => {
    setIsModalOpen(true);
    setTypeModal(type);
  }, []);

  const onHandleCancel: IModalContentProps["onHandleCancel"] = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const addNewUser = useCallback(async (newUser: TUser) => {
    const { user_name, user_pass, user_skill } = newUser;
    const newUserApi = new UserApi();
    if (newUser) await newUserApi.setUser(user_name, user_pass, user_skill);
  }, []);

  const onRenderQuestions = useCallback(() => {
    setRenderQuestions((prev) => ++prev);
  }, []);

  const addNewQuestion = useCallback(
    async (newQuestion: TQuestion) => {
      onRenderQuestions();
      const QuestionsData = new QuestionsApi();
      if (newQuestion)
        await QuestionsData.setQuestion(
          newQuestion.question,
          newQuestion.languege,
          newQuestion.skill,
          newQuestion.answer,
          user?.id,
          newQuestion.id
        );
    },
    [onRenderQuestions, user?.id]
  );

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
          <ContentComponent renderQuestions={renderQuestions} user={user} onRenderQuestions={onRenderQuestions} />
        </Layout>
      </Layout>
    </Flex>
  );
};
