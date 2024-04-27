const promise = new Promise((resolve, reject) =>{
    const randomNumber = Math.random();
    setTimeout(() => {
        if (randomNumber < .6) {
            resolve("Все прошло отлично");
        }else{
            reject("unluck");
        }
    }, 2000);
});