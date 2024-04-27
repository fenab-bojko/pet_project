import { FC } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { FilterJunior } from "./FilterJunior";
import { FilterMidle } from "./FilterMidle";
import { TUser } from "../model/answer/api";

export type TFilter = {
  skill: string;
  lesson: string;
};

export interface IContainerFilterProps {
  user?: TUser;
  onFilterQuestion: (skill: TFilter["skill"]) => void;
  onSendFilter: (lesson: TFilter["lesson"]) => void;
  sendFilter: TFilter['lesson'];
}

export const ConteinerFilter: FC<IContainerFilterProps> = (props) => {
  const { user, onFilterQuestion, onSendFilter, sendFilter } = props;

  const items: TabsProps["items"] = [
    {
      key: "junior",
      label: "Junior",
      children: <FilterJunior onSendFilter={onSendFilter} sendFilter={sendFilter}/>,
    },
    {
      key: "midle",
      label: "Midle",
      children: <FilterMidle onSendFilter={onSendFilter} sendFilter={sendFilter}/>,
    },
  ];

  const onChange = (skill: string) => {
    onSendFilter("");
    onFilterQuestion(skill);
  };

  return <Tabs defaultActiveKey={user && user.user_skill} items={items} onChange={onChange} />;
};
