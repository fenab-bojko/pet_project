import { FC, useCallback, MouseEvent } from "react";
import { Flex, Button } from "antd";
import { IFilterJuniorProps } from "./FilterJunior";
import { ButtonProps } from "antd";

interface IFilterMidleProps extends IFilterJuniorProps {}

export const FilterMidle: FC<IFilterMidleProps> = (props) => {
  const { onSendFilter, sendFilter } = props;


  const onClick: ButtonProps["onClick"] = useCallback(
    async (e: MouseEvent) => {
      if (e.target.value) {
        onSendFilter(e.target.value);
      }
    },
    [onSendFilter]
  );

  return (
    <Flex vertical gap={5}>
      <Button type={sendFilter === "git" ? "primary" : "default"} value="git" onClick={onClick}>
        Git
      </Button>
      <Button type={sendFilter === "react" ? "primary" : "default"} value="react" onClick={onClick}>
        ReactJS
      </Button>
      <Button type={sendFilter === "node" ? "primary" : "default"} value="node" onClick={onClick}>
        NodeJS
      </Button>
      <Button type={sendFilter === "vue" ? "primary" : "default"} value="vue" onClick={onClick}>
        VueJS
      </Button>
    </Flex>
  );
};
