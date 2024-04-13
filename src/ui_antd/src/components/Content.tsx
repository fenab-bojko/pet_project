import { FC, CSSProperties } from "react";
import { Layout } from "antd";
import { QuestionsList } from "./QuestionsList";
import { IQuestion } from "./Question";
import { TQuestion, TUser } from "../model/answer/api";

const { Content } = Layout;

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "#FFF",
};

export interface IContentComponent {
  user?: TUser;
  dataFilterQuestions: TQuestion[];
}


export const ContentComponent: FC<IContentComponent> = (props) => {
  const { user, dataFilterQuestions } = props;

  const isAdmin = user ? user.isadmin : false;

  return (
    <Content style={contentStyle}>
      <QuestionsList isAdmin={isAdmin} dataFilterQuestions={dataFilterQuestions}/>
    </Content>
  );
};
