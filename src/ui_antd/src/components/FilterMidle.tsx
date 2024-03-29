import { FC } from "react";
import { Flex, Button } from "antd";

export const FilterMidle: FC = () => {
  return (
    <Flex vertical gap={5}>
      <Button>Git</Button>
      <Button>ReactJS</Button>
      <Button>NodeJS</Button>
      <Button>VueJS</Button>
    </Flex>
  );
};
