// 1_투포인터 알고리즘 풀이
function solutionA(k, arr) {
  let answer = 0; //sum

  for (let lt = 0; lt <= arr.length-k; lt++) {
    const curArr = arr.slice(lt, lt + 3);
    const sum = curArr.reduce((acc, cur) => acc + cur, 0);
    if (sum > answer) answer = sum;
  }
  return answer;
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log("solutionA :", solutionA(3, arr));
