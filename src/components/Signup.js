import React from 'react'
import { useState } from "react";
import { signup } from '../utils';

const Signup = ({setter}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await signup(username, email, password, setter)
    }

    return (
        <form className ="form" onSubmit ={submitHandler}>
            <label className ="formLabel"> Desired Username:<br></br>
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>

            <label> Your Email:<br></br>
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>

            <label> Desired Password:<br></br>
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br></br><br></br>
            <button type='submit'>Click here to signup</button>
        </form>
    )
}

export default Signup