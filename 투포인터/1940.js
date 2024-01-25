// 1940_주몽
// https://www.acmicpc.net/problem/1940
// resolve > 110724KB, 188ms

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const N = resource[0] * 1;
const M = resource[1] * 1;
const input = resource[2].split(" ").map(Number);

function solution(N, M, input) {
  const sorted = input.slice().sort((a, b) => a - b);
  let answer = 0; // 합이 M이 되는 쌍의 개수
  let lp = 0;
  let rp = N - 1; //좁혀가는 포인터

  while (lp < rp) {
    // lp와 rp가 만나면 종료
    const sum = sorted[lp] + sorted[rp];

    if (sum === M) {
      answer++;
      lp++;
      rp--;
    } else if (sum > M) {
      rp--;
    } else if (sum < M) {
      lp++;
    }
  }

  console.log(answer);
}

solution(N, M, input);
