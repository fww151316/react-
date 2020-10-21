import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Form, Input, InputNumber, Button ,message, Space} from 'antd';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
function Jianjie() {
    const [list, setList] = useState({})

    useEffect(() => {
        Axios.post('http://localhost:5000/manage/user/add', {
            username: list.name,
            password: list.password,
            phone: list.phone,
            email: list.email,
            role_id: list.role_id
        }).then(res => {
            console.log(res.data.status)
            if(res.data.status ==0){
                message.success('添加成功！');
            }
            
        })
    }, [list])

    const onFinish = (values) => {
        console.log(values.user);
        setList(values.user)
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'password']}
                label="Password"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'phone']} label="Phone">
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item name={['user', 'role_id']} label="Role_id">
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button  type="primary" htmlType="submit">
                    添加
                </Button>
            </Form.Item>
        </Form>
    );
}
export default Jianjie