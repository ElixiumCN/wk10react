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
        console.log(data)
        setter(data.username)

    } catch (error) {
        console.log(error)
    }
}

export const userdelete = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/user", {
            method: "DELETE",
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

export const updateuser = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/user", {
            method: "DELETE",
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