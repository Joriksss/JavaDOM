fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(responce =>{
        return responce.json()
    })
    .then(console.log())
    .catch(console.error)