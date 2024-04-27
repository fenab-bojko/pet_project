import '../index.css';
import { FC } from "react";
import { Layout, Flex, Button } from "antd";
import { ContainerAuthUser, IContainerAuthUserProps } from "./ConteinerAuthUser";
import { ContainerInfoUser } from "./ContainerInfoUser";
import { ConteinerFilter, IContainerFilterProps, TFilter } from "./ConteinerFilter";
import { TUser } from "../model/answer/api";


const { Sider } = Layout;

export interface ISiderComponentProps {
  onAuthUser: IContainerAuthUserProps["onAuthUser"];
  isAuth: boolean;
  onShowModal: IContainerAuthUserProps["onShowModal"];
  user?: TUser;
  onFilterQuestion: IContainerFilterProps["onFilterQuestion"];
  onSendFilter: IContainerFilterProps['onSendFilter'];
  sendFilter: TFilter['lesson'];
}

export const SiderComponent: FC<ISiderComponentProps> = (props) => {
  const { onAuthUser, isAuth, onShowModal, user, onFilterQuestion, onSendFilter, sendFilter } = props;

  const isUserAdmin = user && user.isadmin;

  return (
    <Sider width="25%" id='siderStyleContainer'>
      <Flex justify="center" gap={40} vertical>
        {isAuth && user ? (
          <ContainerInfoUser user={user} />
        ) : (
          <ContainerAuthUser onAuthUser={onAuthUser} onShowModal={onShowModal} />
        )}
        <ConteinerFilter user={user} onFilterQuestion={onFilterQuestion} onSendFilter={onSendFilter} sendFilter={sendFilter}/>
        {isUserAdmin 
        ? <Flex className="siderAddQuestion" vertical>
            <Button onClick={() => onShowModal("question")}>Добавить вопрос</Button>
          </Flex>
        : null}
      </Flex>
    </Sider>
  );
};
