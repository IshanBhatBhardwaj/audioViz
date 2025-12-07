

const deboucedPopFunction = (fn) => {
    let id = 0

    return function popFunction(...args) {
        if (id == 1) return;
        id = 1
        fn(...args)
        id = 0
    }
}

export default deboucedPopFunction;