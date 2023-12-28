// [문자열]로 변환하여 활용하는 방법
function solutionB(n, arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let cur of arr) {
    const sum = [...cur.toString()].reduce((acc, cur) => acc + Number(cur), 0);

    if (sum > max) {
      max = sum;
      answer = cur;
    } else if (sum === max) {
      if (cur > answer) answer = cur;
    }
  }

  return answer;
}

// [숫자]를 활용하는 방법
function solutionA(n, arr) {
  let answer; // 자릿수의 합이 최대인 자연수
  let max = Number.MIN_SAFE_INTEGER; //init

  for (let cur of arr) {
    let sum = 0;
    let tmp = cur;

    // 1. 각 자릿수의 합 구하기
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    // 2. 최대값 구하기
    if (sum > max) {
      max = sum;
      answer = cur; // 원본값을 전달
    } else if (sum === max) {
      // 합이 같을 경우 원본값을 비교
      if (cur > answer) answer = cur;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log("solutionA:", solutionA(7, arr));
console.log("solutionB:", solutionB(7, arr));
