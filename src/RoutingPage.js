import React from 'react';
import HomePage from './HomePage';
import Login from './Login';

export default function App(props){
    document.body.style = 'background: aqua;';
    const [isLogin, setLogin] = React.useState(false)
    const [accNumber,setAccNumber] = React.useState('')

    const handleLogin = async (val) => {
        await fetch(`http://api.nessieisreal.com/enterprise/accounts/${val}?key=3a077c40b9c82b45d4233610d4275422`).then(res=>{
            return res.json()
        }).then(data=>{
            setAccNumber(data)
            setLogin(true)
        })
    }
    return <div>
        <h1><center>Financial Goal Setting</center></h1>
        <div>
            {isLogin?<HomePage accNumber={accNumber} />:<Login login={(val)=>handleLogin(val)}/>}

        </div>
    </div>
}