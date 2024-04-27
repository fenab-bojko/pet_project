import { FC, CSSProperties } from "react";
import { Layout } from "antd";
import { QuestionsList } from "./QuestionsList";
import { IQuestion } from "./Question";
import { TQuestion, TUser } from "../model/answer/api";
import { TFilter } from "./ConteinerFilter";

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
  sendFilter: TFilter['lesson'];
}


export const ContentComponent: FC<IContentComponent> = (props) => {
  const { user, dataFilterQuestions, sendFilter } = props;

  const isAdmin = user ? user.isadmin : false;

  return (
    <Content style={contentStyle}>
      <QuestionsList isAdmin={isAdmin} dataFilterQuestions={dataFilterQuestions} sendFilter={sendFilter}/>
    </Content>
  );
};
