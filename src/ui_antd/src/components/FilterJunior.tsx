import { FC, useCallback, MouseEvent } from "react";
import { Flex, Button } from "antd";
import { ButtonProps } from "antd";
import { IContainerFilterProps, TFilter } from "./ConteinerFilter";

export interface IFilterJuniorProps {
  onSendFilter: IContainerFilterProps["onSendFilter"];
  sendFilter: TFilter['lesson'];
}

export const FilterJunior: FC<IFilterJuniorProps> = (props) => {
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
      <Button type={sendFilter === "html" ? "primary" : "default"} value="html" onClick={onClick}>
        HTML
      </Button>
      <Button type={sendFilter === "css" ? "primary" : "default"} value="css" onClick={onClick}>
        CSS
      </Button>
      <Button type={sendFilter === "js" ? "primary" : "default"} value="js" onClick={onClick}>
        JavaScript
      </Button>
      <Button type={sendFilter === "git" ? "primary" : "default"} value="git" onClick={onClick}>
        Git
      </Button>
    </Flex>
  );
};
