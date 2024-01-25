// 2559_수열
// https://www.acmicpc.net/problem/2559
// resolve > 16732KB, 212ms

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const [N, K] = resource[0].split(" ").map(Number); // 측정 개수, 합을 구할 연속적인 날의 수
const input = resource[1].split(" ").map(Number); // 측정한 온도

function solution() {
  let max = 0; // 최대값
  let sum = input.slice(0, K).reduce((acc, cur) => acc + cur, 0); // 처음 K개의 합, 초기값 계산
  max = sum; // 초기값 설정

  // i번째를 빼고 i+K번째를 더해가면서(K개 윈도우 슬라이딩), 기존의 합보다 클 경우에만 max값을 갱신
  for (let i = 0; i < N - K; i++) {
    sum += input[i + K] - input[i];
    if (sum > max) max = sum;
  }

  console.log(max);
}

solution(N, K, input);
