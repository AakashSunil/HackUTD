import React from 'react';
import HomePage from './HomePage';
import Login from './Login';

export default function App(props){
    const [isLogin, setLogin] = React.useState(false)
    const [accNumber,setAccNumber] = React.useState('')

    const handleLogin = (val) => {
        setAccNumber(val)
        setLogin(true)
    }
    return <div>
        <h1><center>Financial Goal Setting</center></h1>
        <div>
            {isLogin?<HomePage accNumber={accNumber} />:<Login login={(val)=>handleLogin(val)}/>}

        </div>
    </div>
}