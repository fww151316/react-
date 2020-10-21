import React, { useEffect, useState } from 'react';
import { Table, Button, message } from 'antd';
import './yangshi/List.css'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: "20%",
  },
  {
    title: '手机',
    dataIndex: 'age',
    width: "20%",
  },
  {
    title: 'Email',
    dataIndex: 'age',
    width: '20%',
  },
  {
    title: '操作',
    dataIndex: 'address',
    width: '40%',
  },
];


function Yonghu() {
  const history = useHistory()
  const [data, setData] = useState([])
  const arr = [];
  useEffect(() => {
    Axios.get('http://localhost:5000/manage/user/list').then(res => {
      let ti = res.data.data.users
      ti.map((item, index) => {
        arr.push({
          key: index,
          name: item.username,
          age: item.phone,
          address: <div>
            <Button type="primary" onClick={() => xui(item._id)}>修改</Button>
            <Button type="primary" onClick={() => del(item._id)} danger>删除</Button>
          </div>,
        })
      })
      setData(arr)
    })
  }, [])

  const del = (id) => {
    Axios.post('http://localhost:5000/manage/user/delete', {
      userId: id
    }).then(res => {
      console.log(res.data.status)
      if (res.data.status === 0) {
        message.success('删除成功！');
        const arr2 = [];
        Axios.get('http://localhost:5000/manage/user/list').then(res => {
          let ti = res.data.data.users
          ti.map((item, index) => {
            arr2.push({
              key: index,
              name: item.username,
              age: item.phone,
              address: <div>
                <Button type="primary" onClick={() => xui(item._id)}>修改</Button>
                <Button type="primary" onClick={() => del(item._id)} danger>删除</Button>
              </div>,
            })
          })
          setData(arr2)
        })
      }
    })
  }
  const xui = (id) => {
    history.push('/jdbj/luyan/'+id)
  }
  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }} scroll={{ y: "410px" }} />
}

export default Yonghu