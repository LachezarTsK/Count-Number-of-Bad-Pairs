
#include <vector>
using namespace std;

class Solution {
    
public:
    long long countBadPairs(vector<int>& nums) {
        long long totalBadPairs = 0;
        unordered_map<int, int> goodPairsToFrequency;

        for (int i = 0; i < nums.size(); ++i) {
            int currentGoodPairs = goodPairsToFrequency[nums[i] - i];
            totalBadPairs += i - currentGoodPairs;
            ++goodPairsToFrequency[nums[i] - i];
        }
        return totalBadPairs;
    }
};
