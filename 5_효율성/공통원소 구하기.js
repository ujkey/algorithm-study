// 투 포인터 알고리즘(Two Pointers Algorithm)
// O(n+m)
function solutionB(arr1, arr2) {
  const answer = [];
  let p1 = 0;
  let p2 = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return answer;
}

function solutionA(arr1, arr2) {
  const answer = [];

  arr1.forEach((v) => {
    arr2.forEach((w) => {
      if (v === w) answer.push(v);
    });
  });

  answer.sort((a, b) => a - b);
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log("solution A:", solutionA(a, b));
console.log("solution B:", solutionB(a, b));
