import { FC, CSSProperties } from "react";
import { Layout } from "antd";
import { IQuestionsList, QuestionsList } from "./QuestionsList";
import { IQuestion } from "./Question";
import { TUser } from "../model/answer/api";

const { Content } = Layout;

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "#FFF",
};

export interface IContentComponent {
  renderQuestions: IQuestionsList["renderQuestions"];
  user?: TUser;
  onRenderQuestions: IQuestion["onRenderQuestions"];
}


export const ContentComponent: FC<IContentComponent> = (props) => {
  const { renderQuestions, user, onRenderQuestions } = props;

  const isAdmin = user ? user.isadmin : false;

  return (
    <Content style={contentStyle}>
      <QuestionsList renderQuestions={renderQuestions} isAdmin={isAdmin} onRenderQuestions={onRenderQuestions} />
    </Content>
  );
};
