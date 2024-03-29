import { FC, CSSProperties } from "react";
import { Layout } from "antd";
import { QuestionsList } from "./QuestionsList";

const { Content } = Layout;

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "#FFF",
};

export interface IContentComponent {}

export const ContentComponent: FC<IContentComponent> = () => {
  return (
    <Content style={contentStyle}>
      <QuestionsList />
    </Content>
  );
};
