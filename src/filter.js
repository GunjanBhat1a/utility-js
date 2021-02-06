const filter = (arr,func) => {
    var output = [];
    recurse(output,arr,func,0);
    return output;
}

const recurse = (output, arr, func, iterator) => {
    if(iterator == arr.length)
        return;
    if(func(arr[iterator]))
        output.push(arr[iterator]);
    recurse(output,arr,func,iterator + 1);
}

module.exports = filter;