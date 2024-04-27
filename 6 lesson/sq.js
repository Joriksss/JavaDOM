const promise = new Promise ((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
        if (randomNumber < .6){
            resolve("good");
        }else{reject ("unluck")}
    }, 2000)
})