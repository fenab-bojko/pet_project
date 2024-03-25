import { FC, CSSProperties } from "react";
import { Layout } from "antd";
import { TQuestion } from "../model/answer/api";

const { Content } = Layout;

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

export interface IContentComponent {
  questions: TQuestion[];
}

export const ContentComponent: FC<IContentComponent> = (props) => {
  const { questions } = props;
  return <Content style={contentStyle}>Content</Content>;
};
