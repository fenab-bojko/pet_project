import React, { FC } from "react";
import { Layout, Image, Flex, Typography } from "antd";
import logo from "../assets/logo-svgrepo-com.svg";

const { Header } = Layout;
const { Title } = Typography;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 70,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#fff",
  margin: "0",
};

export const HeaderComponent: FC = () => {
  return (
    <Header style={headerStyle}>
      <Flex justify="space-between" align="center">
        <Image preview={false} width={55} src={logo} />
        <Flex flex={2} justify="center" align="center">
          <Title style={{ margin: "0" }} color="#FFF" level={2}>
            Вопросы для собеседования.
          </Title>
        </Flex>
      </Flex>
    </Header>
  );
};
