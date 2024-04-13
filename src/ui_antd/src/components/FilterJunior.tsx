import { FC, MouseEventHandler } from "react";
import { Flex, Button } from "antd";
import { IContainerFilterProps, TFilter } from "./ConteinerFilter";

export interface IFilterProps {
  
}

export type TOnClick = (e: EventMouse) => void;

export const FilterJunior: FC<IFilterProps> = () => {
  

  const onClick: TOnClick = (e) => {
    console.log(e)
  }
  
  return (
    <Flex vertical gap={5}>
      <Button value="html" onClick={onClick}>
        HTML
      </Button>
      <Button value="css" onClick={onClick}>
        CSS
      </Button>
      <Button value="js" onClick={onClick}>
        JavaScript
      </Button>
      <Button value="git" onClick={onClick}>
        Git
      </Button>
    </Flex>
  );
};
