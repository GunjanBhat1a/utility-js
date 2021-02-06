const max = (nums) => {
    let maxNumber = undefined;
     
    if(nums.length > 0)
        maxNumber = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(maxNumber< nums[i])
            maxNumber = nums[i];
    }
    return maxNumber;
}

module.exports = max;