const reduce = (arr,func,concat) => {
    if(arr.length == 0)
        return concat;
    if(concat == undefined) return recurse(arr,func,0);
    return func(concat,recurse(arr,func,0));
}

const recurse = (arr, func, iterator) => {
    if(iterator != (arr.length-1))
        return func(arr[iterator],recurse(arr,func,iterator+1));
    return arr[iterator];
}

module.exports = reduce;
