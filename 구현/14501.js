// 14501_퇴사
// https://www.acmicpc.net/problem/14501
// not resolved yet

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const N = resource.shift() * 1; // 퇴사까지 남은 날짜
const table = resource.map((el) => el.split(" ").map((el) => el * 1)); // 상담을 완료하는데 걸리는 기간과 수익

function solution(N, table) {
  let answer = 0; // 최대 수익
  let time = N; // 남은 날짜

  // 종료조건 :
  while (time > 0) {
    const cur = N - time; // 남은 날짜
    const [t, p] = table[cur]; // t: 상담 소요 기간, p: 수익
    console.log(cur, t, p);
    if (time - t < 0) break;

    // 상담 소요 기간만큼 날짜를 줄인다
    time -= t;

    // 수익 계산
    answer += p;
    console.log(answer);
  }

  //   console.log(answer);
}

solution(N, table);

// 예제 4번 통과 못하는 이유는?
