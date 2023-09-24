/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    const same = nums[0] === nums[nums.length - 1];
    const decreasing = nums[0] > nums[nums.length - 1];
    const increasing = nums[0] < nums[nums.length-1];


    if(same){
        for(let i=1;i<nums.length;i++){
            if(nums[i]!==nums[i-1]) return false;
        }
    }else if(decreasing){
        for(let i=1;i<nums.length;i++){
            if(nums[i] > nums[i-1]) return false;
        }
    } else {

        for(let i=1;i<nums.length;i++){
            if(nums[i] <nums[i-1]) return false;
        }
    }
    return  true;
};

//T(n) = O(n)
//S(n)= O(1)
