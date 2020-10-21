import React, { useState } from 'react';
import { Form, Input,Button,message } from 'antd';
import { useEffect } from 'react';
import Axios from 'axios';
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

const Luyan = (props) => {
    // console.log()
    const [list,setList] = useState([])
    useEffect(()=>{
        Axios.post('http://localhost:5000/manage/user/update',{
            _id:props.match.params.id
        }).then(res=>{
            setList(res.data.data)
            
        })
    },[])





  const onFinish = (values) => {
    Axios.post('http://localhost:5000/manage/user/update',{
        _id:props.match.params.id,
        username:values.user.name,
        phone:values.user.phone,
        email:values.user.email,
        role_id:values.user.role_id
    }).then(res=>{
        console.log(res)
        if(res.data.status =='0'){
            message.success('修改成功！');
        }
    })
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
        <Input placeholder ={list.username}/>
      </Form.Item>
      <Form.Item
        name={['user', 'password']}
        label="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder={list.password}/>
      </Form.Item>
      <Form.Item name={['user', 'phone']} label="phone">
        <Input placeholder={list.phone}/>
      </Form.Item>
      
      <Form.Item name={['user', 'email']} label="email">
        <Input placeholder={list.email}/>
      </Form.Item>
      <Form.Item name={['user', 'role_id']} label="role_id">
        <Input placeholder={list.role_id}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          修改
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Luyan