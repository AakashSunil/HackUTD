import React from 'react';
import { userDetails } from './apis/api';
import HomePage from './HomePage';
import Login from './Login';

export default function App(props){
    document.body.style = 'background: aqua;';
    const [isLogin, setLogin] = React.useState(false)
    const [accNumber,setAccNumber] = React.useState('')

    const handleLogin = async (val) => {
        userDetails(val).then(data=>{
            setAccNumber(data)
            setLogin(true)
        }
        )
    }
    return <div>
        <h1><center>Financial Goal Setting</center></h1>
        <div>
            {isLogin?<HomePage accNumber={accNumber} />:<Login login={(val)=>handleLogin(val)}/>}

        </div>
    </div>
}