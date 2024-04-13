import { FC } from "react";
import { Flex, Button } from "antd";
import { IFilterProps, TOnClick } from "./FilterJunior";

export const FilterMidle: FC<IFilterProps> = () => {
  

  const onClick: TOnClick = (e) => {
    console.log(e)
  };

  return (
    <Flex vertical gap={5}>
      <Button value="git" onClick={onClick}>
        Git
      </Button>
      <Button value="react" onClick={onClick}>
        ReactJS
      </Button>
      <Button value="node" onClick={onClick}>
        NodeJS
      </Button>
      <Button value="vue" onClick={onClick}>
        VueJS
      </Button>
    </Flex>
  );
};
