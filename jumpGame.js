/*
Given an integer list nums where each number represents the maximum number of hops you can make, determine whether you can reach to the last index starting at index 0.

Constraints

n ≤ 100,000 where n is the length of nums.
Example 1
Input

nums = [1, 0, 0, 0]
Output

false
Example 2
Input

nums = [2, 4, 0, 1, 0]
Output

true
Explanation

We can jump from index 0 to 1, and then jump to the end.

Example 3
Input

nums = [1, 1, 0, 1]
Output

false
Explanation

We can't go past index 2 of the array.
*/


function canJump(nums){
  let lastValid = nums.length-1;
  for(let i=nums.length-1;i>=0;i--){
      if(i+nums[i] >= lastValid){
          lastValid = i;
      }
  }
  return lastValid===0;
}

console.log(canJump[1, 1, 0, 1]);
