import { FC, CSSProperties } from "react";
import { Layout } from "antd";
import { IQuestionsList, QuestionsList } from "./QuestionsList";
import { ISiderComponentProps } from "./Sider";
import { IQuestion } from "./Question";

const { Content } = Layout;

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "#FFF",
};

export interface IContentComponent {
  renderQuestions: IQuestionsList["renderQuestions"];
  isAuth: ISiderComponentProps["isAuth"];
  onRenderQuestions: IQuestion["onRenderQuestions"];
}

export const ContentComponent: FC<IContentComponent> = (props) => {
  const { renderQuestions, isAuth, onRenderQuestions } = props;
  return (
    <Content style={contentStyle}>
      <QuestionsList renderQuestions={renderQuestions} isAuth={isAuth} onRenderQuestions={onRenderQuestions} />
    </Content>
  );
};
