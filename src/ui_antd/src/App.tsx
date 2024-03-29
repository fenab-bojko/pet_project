import { FC, useState, useEffect } from "react";
import { Layout, Flex } from "antd";
import { HeaderComponent } from "./components/Header";
import { SiderComponent } from "./components/Sider";
import { ContentComponent } from "./components/Content";
import { TUser } from "./model/answer/api";
import { IContainerAuthUserProps } from "./components/ConteinerAuthUser";
import { UserApi } from "./model/answer/api";
import { IModalContentProps, ModalComponent } from "./components/Modal";

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "1440px",
};

export const App: FC = () => {
  // const [questions, setQuestions] = useState<TQuestion[]>();
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
    const newUserApi = new UserApi();
    if (newUser) await newUserApi.setUser(newUser);
  };

  return (
    <Flex gap="middle" wrap="wrap">
      <ModalComponent
        isModalOpen={isModalOpen}
        addNewUser={addNewUser}
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
