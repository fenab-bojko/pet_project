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
}

export const ConteinerFilter: FC<IContainerFilterProps> = (props) => {
  const { user, onFilterQuestion } = props;

  

  const items: TabsProps["items"] = [
    {
      key: "junior",
      label: "Junior",
      children: <FilterJunior />,
    },
    {
      key: "midle",
      label: "Midle",
      children: <FilterMidle />,
    },
  ];

  const onChange = (skill: string) => {
    onFilterQuestion(skill);
  };

  return <Tabs defaultActiveKey={user && user.user_skill} items={items} onChange={onChange} />;
};
