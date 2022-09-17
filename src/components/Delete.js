import React from 'react' 
import { useState } from "react";
import { userdelete } from '../utils';

const Delete = (props) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await userdelete(username, email, password, props.setter)
    }

    return (
        <form className ="form" onSubmit ={submitHandler}>
            <label className ="formLabel"> User account to delete:<br></br>
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
            <button type='submit'>Click here to delete your account</button>
        </form>
    )
}

export default Delete