
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    let totalBadPairs = 0;
    const goodPairsToFrequency = new Map();//Map<Integer, Integer>()
    
    for (let i = 0; i < nums.length; ++i) {
        let currentGoodPairs = goodPairsToFrequency.get(nums[i] - i) ? goodPairsToFrequency.get(nums[i] - i) : 0;
        totalBadPairs += i - currentGoodPairs;
        goodPairsToFrequency.set(nums[i] - i, currentGoodPairs + 1);
    }
    return totalBadPairs;
};
