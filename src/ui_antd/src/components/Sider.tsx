import React, { FC } from "react";
import { Layout, Flex, Button } from "antd";
import { ContainerAuthUser, IContainerAuthUserProps } from "./ConteinerAuthUser";
import { ContainerInfoUser } from "./ContainerInfoUser";
import { ConteinerFilter } from "./ConteinerFilter";
import { TUser } from "../model/answer/api";

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#fff",
  padding: "20px 10px",
};

export interface ISiderComponentProps {
  onAuthUser: IContainerAuthUserProps["onAuthUser"];
  isAuth: boolean;
  onShowModal: IContainerAuthUserProps["onShowModal"];
  user?: TUser;
}

export const SiderComponent: FC<ISiderComponentProps> = (props) => {
  const { onAuthUser, isAuth, onShowModal, user } = props;

  return (
    <Sider width="25%" style={siderStyle}>
      <Flex justify="center" gap={40} vertical>
        {isAuth && user ? (
          <ContainerInfoUser user={user} />
        ) : (
          <ContainerAuthUser onAuthUser={onAuthUser} onShowModal={onShowModal} />
        )}
        <ConteinerFilter user={user} />
        {user && user.isadmin && (
          <Flex className="siderAddQuestion" vertical>
            <Button onClick={() => onShowModal("question")}>Добавить вопрос</Button>
          </Flex>
        )}
      </Flex>
    </Sider>
  );
};
