import { FC, CSSProperties } from "react";
import { Layout } from "antd";
import { IQuestionsList, QuestionsList } from "./QuestionsList";

const { Content } = Layout;

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "#FFF",
};

export interface IContentComponent {
  renderQuestions: IQuestionsList['renderQuestions'];
  
}

export const ContentComponent: FC<IContentComponent> = (props) => {
  const {renderQuestions} = props;
  return (
    <Content style={contentStyle}>
      <QuestionsList renderQuestions={renderQuestions} />
    </Content>
  );
};
