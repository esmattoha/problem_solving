/**
 * name : Dipu
 * Date : 26.09.2021
 *
 * question : Given an array of integers nums and an integer target,
 *            return indices of the two numbers such that they add up to target
 */

const numArr = [3, 7, -1, 25, 17];
const target = 24;

const targetMatch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        console.log([i, j]);
      }
    }
  }
};

targetMatch(numArr, target);

// Time complexity O(n*n)

// ============================================ //

// * I should make a better solution of it, which time complexity shoule be less to the above solution.