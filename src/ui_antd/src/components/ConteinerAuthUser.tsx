import { FC, useState } from "react";
import { Flex, Input, Tooltip, Button } from "antd";
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons";


export interface IContainerAuthUserProps {
  onAuthUser: (name: string, password: string) => void;
  onShowModal: (typeModal: string) => void;
}

export const ContainerAuthUser: FC<IContainerAuthUserProps> = (props) => {
  const { onAuthUser, onShowModal } = props;

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  

  return (
    <Flex className="siderAuthUser" vertical gap={5} align="center" style={{marginTop: '4px'}}>
      <Input
        placeholder="Введите свое имя"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Если вы зарегестрированы введите свое имя.">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
        onChange={(e) => setName(e.target.value)}
      />
      <Input.Password placeholder="Введите пароль" onChange={(e) => setPassword(e.target.value)} />
      <Button  onClick={() => onAuthUser(name, password)} style={{ width: "100%" }} datatype="login">
        Вход
      </Button>
      <Button onClick={() => onShowModal('registracion')} style={{ width: "100%" }} datatype="registration">
        Регистрация
      </Button>
    </Flex>
  );
};
