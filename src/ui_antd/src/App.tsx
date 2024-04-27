import './index.css';
import { FC, useCallback, useEffect, useState } from "react";
import { Layout, Flex } from "antd";
import { HeaderComponent } from "./components/Header";
import { SiderComponent } from "./components/Sider";
import { ContentComponent } from "./components/Content";
import { TQuestion, TUser } from "./model/answer/api";
import { IContainerAuthUserProps } from "./components/ConteinerAuthUser";
import { UserApi, QuestionsApi } from "./model/answer/api";
import { IModalContentProps, ModalComponent } from "./components/Modal";
import { IContainerFilterProps, TFilter } from "./components/ConteinerFilter";

export const App: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [user, setUser] = useState<TUser>();
  const [sendFilter, setSendFilter] = useState<TFilter["lesson"]>("");
  const [dataFilterQuestions, setDataFilterQuestions] = useState<TQuestion[]>([]);

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

  const addNewQuestion = useCallback(
    async (newQuestion: TQuestion) => {
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
    [user?.id]
  );

  const onFilterQuestion: IContainerFilterProps["onFilterQuestion"] = useCallback(async (skill) => {
    const QuestionData = new QuestionsApi();
    const data = await QuestionData.sortQuestions(skill);
    if (data) setDataFilterQuestions(data);
  }, []);

  const onSendFilter = useCallback((lesson: TFilter["lesson"]) => {
    setSendFilter(lesson);
  }, []);

  useEffect(() => {
    onFilterQuestion("junior");
  }, [onFilterQuestion]);

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
      <Layout id='layoutStyle'>
        <HeaderComponent />
        <Layout>
          <SiderComponent
            onAuthUser={onAuthUser}
            isAuth={isAuth}
            onShowModal={onShowModal}
            user={user}
            onFilterQuestion={onFilterQuestion}
            onSendFilter={onSendFilter}
            sendFilter={sendFilter}
          />
          <ContentComponent user={user} dataFilterQuestions={dataFilterQuestions} sendFilter={sendFilter} />
        </Layout>
      </Layout>
    </Flex>
  );
};


