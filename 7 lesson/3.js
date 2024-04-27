async function getUsers(){
    const responce = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await responce.json()

    return data
}

Promise.all([getUsers()]).then(
    values => {
        const[users] = values;
        console.log(users);
    }
)
.catch(console.error)