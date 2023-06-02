function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success!');
        }, 1000);
        reject(new Error('Error!'))
    });
}

createPromise().then(console.log).catch(console.error);