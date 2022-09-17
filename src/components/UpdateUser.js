import React from 'react'
import { useState } from "react";
import { updateuser } from '../utils';

const Updateuser = (props) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await updateuser(username, email, password, props.setter)
    }

    return (
        <form className ="form" onSubmit ={submitHandler}>
            <label className ="formLabel"> Updated Username:<br></br>
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>

            <label> Updated Email address:<br></br>
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>

            <label> Updated Password:<br></br>
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br></br><br></br>
            <button type='submit'>Click here to update your account details</button>
        </form>
    )
}

export default Updateuser