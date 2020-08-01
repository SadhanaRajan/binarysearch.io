/*
You are given a list of unique integers nums. Return the size of the largest inclusive interval [start, end] such that it contains exactly one number in nums.

Constraints

1 ≤ n ≤ 100,000 where n is the length of nums
1 ≤ start ≤ end ≤ 100,000
Example 1
Input

nums = [10, 5, 19]
Output

99990

Explanation

The largest interval that contains one number is [11, 100000] which contains 19.
*/

class Solution {
    solve(nums) {
        // Write your code here
        nums.push(0)
        nums.push(100001);
        let n =nums.length;
  
        // Sort the elements in ascending order  
        nums = nums.sort((a,b)=>{return a-b});
        // To store the maximum size  
        let mx = 0; 
        for (let i = 1; i < n - 1; i++) 
        {  
            let L = nums[i-1] + 1; 
            let R = nums[i+1] - 1; 
  
            // Total integers in the range  
            let cnt = R - L + 1; 
            mx = Math.max(mx, cnt); 
        } 
  
        return mx;
    }
}
