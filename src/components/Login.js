import React from 'react' 
import { useState } from "react";
import { login } from '../utils';

const Login = ({setter}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await login(username, email, password, setter)
    }

    return (
        <form className ="form" onSubmit ={submitHandler}>
            <label className ="formLabel"> Username:<br></br>
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>

            <label> Email:<br></br>
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>

            <label> Password:<br></br>
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br></br><br></br>
            <button type='submit'>Click here to login</button>
        </form>
    )
}

export default Login