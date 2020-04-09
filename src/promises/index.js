const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        return true
        ? resolve('Hey')
        : reject('Oops')
    })
}

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))