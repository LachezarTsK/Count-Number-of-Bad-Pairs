
import java.util.HashMap;
import java.util.Map;

public class Solution {

    public long countBadPairs(int[] nums) {
        long totalBadPairs = 0;
        Map<Integer, Integer> goodPairsToFrequency = new HashMap<>();

        for (int i = 0; i < nums.length; ++i) {
            int currentGoodPairs = goodPairsToFrequency.getOrDefault(nums[i] - i, 0);
            totalBadPairs += i - currentGoodPairs;
            goodPairsToFrequency.put(nums[i] - i, currentGoodPairs + 1);
        }
        return totalBadPairs;
    }
}
