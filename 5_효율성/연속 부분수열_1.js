// O(n)
function solutionB(m, arr) {
  let answer = 0;
  let lt = 0; //pointer left
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) {
        answer++;
        // console.log(lt, rt);
      }
    }
  }
  return answer;
}

function solutionA(m, arr) {
  let answer = 0; // 연속부분수열의 합이 m인 경우의 수
  let lt = 0;
  let rt = lt + 1;
  let sum = arr[lt]; // 연속부분수열의 합

  while (rt < arr.length) {
    sum += arr[rt];

    if (sum < m) {
      rt++;
    } else if (sum >= m) {
      lt++;
      rt = lt + 1;
      sum = 0;
    } else if (sum === m) {
      answer++;
      lt++;
      rt = lt + 1;
      sum = arr[lt];
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log("solutionA :", solutionA(6, a));
console.log("solutionB :", solutionB(6, a));
