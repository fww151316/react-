import React from 'react';
import { Avatar, Button } from 'antd';
import { useHistory } from 'react-router-dom';
function Geren() {
    const history = useHistory()
    const tuichu = ()=>{
        localStorage.removeItem('token')
        history.push('/')
    }
    return (
        <div>
            <Avatar style={{ width: '30%', height: "50%" }} src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2107917186,3800814875&fm=26&gp=0.jpg" />
            <Button onClick={tuichu} style={{marginLeft: '100px'}} type="primary" danger>
                退出
            </Button>
        </div>
    )
}
export default Geren