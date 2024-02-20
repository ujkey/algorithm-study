// 1463_1로 만들기
// URL: https://www.acmicpc.net/problem/1463
// not resolved yet

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const N = require("fs").readFileSync(filePath, "utf-8") * 1;
// console.log(N);

function solution(N) {
  const DP = new Array(N + 1).fill(0); // 1부터 N까지의 최소 '연산 횟수'를 저장할 배열

  // 1~N 까지의 수를 연산하여 1을 만들기 위한 최소 연산 횟수를 DP 배열에 저장하기
  // 1은 이미 1이기 때문에 연산 횟수가 0이다.
  // 2부터 시작하기 때문에 1을 빼는 연산을 우선적으로 수행한다.
  for (let i = 2; i <= N; i++) {
    DP[i] = DP[i - 1] + 1; // 1을 빼는 연산 횟수를 저장

    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2] + 1); // 2로 나누는 연산을 수행
    }

    if (i % 3 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 3] + 1); // 3으로 나누는 연산을 수행
    }

    // +1을 하는 이유는 해당 연산을 수행했을 때의 연산 횟수를 더해주기 위함
  }
  console.log(DP[N]);
}
solution(N);

// Q) 1을 뺀 값을 우선적으로 계산하는 이유?
// 1을 빼는 연산은 2와 3으로 나누는 연산보다 빠르게 수를 줄일 수 있기 때문이다.
// 2와 3으로 나누는 연산은 나누어 떨어질 때만 가능하다.
