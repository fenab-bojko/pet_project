import {FC} from 'react';
import { Spin, Alert } from 'antd';

export const SpinComponent: FC = () => {
    return (
        <Spin tip="Loading...">
            <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
            />
        </Spin>
    )
    
}
