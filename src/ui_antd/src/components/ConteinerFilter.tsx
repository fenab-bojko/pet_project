import { FC, useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { FilterJunior } from "./FilterJunior";
import { FilterMidle } from "./FilterMidle";
import { TUser } from "../model/answer/api";

const onChange = (key: string) => {
  console.log(key);
};

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

interface IContainerFilterProps {
  user?: TUser;
}

export const ConteinerFilter: FC<IContainerFilterProps> = (props) => {
  const { user } = props;

  const [defaultTabs, setDefaultTabs] = useState(user ? user.user_skill : "junior");

  return <Tabs defaultActiveKey={defaultTabs} items={items} onChange={onChange} />;
};
