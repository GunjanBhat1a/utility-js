const min = (nums) => {
    let minNumber = undefined;
     
    if(nums.length > 0)
        minNumber = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(minNumber > nums[i])
            minNumber = nums[i];
    }
    return minNumber;
}

module.exports = min;