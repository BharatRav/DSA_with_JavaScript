ar twoSum = function(nums, target) {
    const map = {}

    for (let i=0;i<nums.length;i++){
        let val = nums[i];
        map[val] =i;
    }

    for(let i=0;i<nums.length;i++) {
        let potentialKey = target-nums[i];

        if(map[potentialKey] && map[potentialKey]!==i){
            return [i,map[potentialKey]]
        }
    }

};
