async function  getUsers (){
    try{
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await responce.json()

        console.log(data)
        throw new Error("Error")}
    catch (error){
        console.log(error.message)
    }
}
getUsers();
console.log(1)
console.log(2)
console.log(3)