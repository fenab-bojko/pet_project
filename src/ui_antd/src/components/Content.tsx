import { FC, CSSProperties } from "react";
import { Layout } from "antd";
import { QuestionsList } from "./QuestionsList";
import { TQuestion } from "../model/answer/api";

const { Content } = Layout;

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#FFF",
};

export interface IContentComponent {
  questions: TQuestion[];
}

export const ContentComponent: FC<IContentComponent> = (props) => {
  const {questions} = props;

  return <Content style={contentStyle}>
    <QuestionsList questions={questions}/>
  </Content>;
};
