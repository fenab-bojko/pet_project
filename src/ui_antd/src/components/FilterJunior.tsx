import { FC } from "react";
import { Flex, Button } from "antd";

export const FilterJunior: FC = () => {
  return (
    <Flex vertical gap={5}>
      <Button>HTML</Button>
      <Button>CSS</Button>
      <Button>JavaScript</Button>
      <Button>Git</Button>
    </Flex>
  );
};
