// 슬라이딩 윈도우(sliding window)
function solutionB(k, arr) {
  let answer = 0;
  let sum = 0;

  //init
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

function solutionA(k, arr) {
  let answer = 0; //sum

  for (let lt = 0; lt <= arr.length - k; lt++) {
    const curArr = arr.slice(lt, lt + 3);
    const sum = curArr.reduce((acc, cur) => acc + cur, 0);
    if (sum > answer) answer = sum;
  }
  return answer;
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log("solutionA :", solutionA(3, arr));
console.log("solutionB :", solutionB(3, arr));
