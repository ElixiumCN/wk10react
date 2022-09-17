export const login = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username" : username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data)
        setter(data.username)

    } catch (error) {
        console.log(error)
    }
}
//TODO: 



export const displayUsers = async (setter) => {
    try {
        const response = await fetch("http://localhost:5001/displayUsers", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json()
        const usernames = data.users.map(users => users.username)
        console.log(usernames)
        return usernames
    } catch (error)  {
        console.log(error)
    }
}



export const signup = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/signUp", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username" : username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data.token)
        setter(data.username)
        localStorage.setItem('MyToken', data.token);

    } catch (error) {
        console.log(error)
    }
}

// export const deleteUser = async (setUser, setIsAuth) => {
//     const response = await fetch(${process.env.REACT_APP_API_URL}/users/myprofile, {
//         method: 'DELETE',
//         headers: { 'Authorization': Bearer ${localStorage.getItem('MyToken')} },
//     });
//     await response.json();
//     setUser('');

export const userdelete = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/user", {
            method: "DELETE",
            headers: { 'Authorization': `Bearer ${localStorage.getItem('MyToken')}` }
            })
        const data = await response.json()
        console.log(data)
        setter(data.username)

    } catch (error) {
        console.log(error)
    }
}

// if statements for if e.g. email and password blank.

export const updateuser = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/updateUser", {
            method: "PUT",

            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('MyToken')}`},

            body: JSON.stringify({
                "username" : username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
        setter(data.username)

    } catch (error) {
        console.log(error)
    }
}