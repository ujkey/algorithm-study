// 14501_퇴사
// https://www.acmicpc.net/problem/14501
// not resolved yet

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const N = resource.shift() * 1; // 퇴사까지 남은 날짜
const table = resource.map((el) => el.split(" ").map(Number)); // 상담을 완료하는데 걸리는 기간과 수익

function solution(N, table) {
  const DP = new Array(N).fill(0); // DP[i]: i일까지의 최대 수익
  // console.log(DP);

  for (let i = 0; i < N; i++) {
    const [period, profit] = table[i];

    if (i + period > N) continue;
    DP[i] = DP[i] + profit;

    for (let j = i + period; j < N; j++) {
      DP[j] = Math.max(DP[j], DP[i]);
    }
  }

  console.log(Math.max(...DP));
}

solution(N, table);
