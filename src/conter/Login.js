import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory, Redirect } from 'react-router-dom';
import './yangshi/Login.css'
import axios from 'axios'



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 11,
    span: 8,
  },
};

const Login = () => {
  const history = useHistory()
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")

  useEffect(()=>{
    if(localStorage.getItem('token')){
      history.push('/jdbj')
    }
    axios.post('http://localhost:5000/login',{
      username:name,
      password:password
    }).then(res=>{
      // console.log(res.data.data)
      if(res.data.status == 0){
        localStorage.setItem('token',res.data.data._id)
        history.push('/jdbj')
      }
    })
  },[name,password])

 
  if(localStorage.getItem('token')){
    return <Redirect to='/jdbj' />
  }
  const onFinish = (values) => {
    console.log('Success:', values);
    setName(values.username)
    setPassword(values.password)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
      className='zi'
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login