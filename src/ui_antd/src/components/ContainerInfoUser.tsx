import { FC } from "react";
import {Flex, Typography} from "antd";
import { TUser } from "../model/answer/api";

const {Title} = Typography;

export interface IContainerInfoUserProps {
    user: TUser;
}

export const ContainerInfoUser: FC<IContainerInfoUserProps> = (props) => {
    const {user} = props;

    return (
        <Flex className="siderInfoUser" vertical align="center">
            <Title level={3}>{user.user_name}</Title>
            <Title level={5}>{user.user_skill}</Title>
        </Flex>
    )
}