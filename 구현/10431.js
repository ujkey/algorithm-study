// 10431_ 줄세우기
// https://www.acmicpc.net/problem/10431
// not resolved yet > 25%

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const N = resource.shift() * 1; // 테스트 케이스의 개수
const testCases = resource.map((testCase) => testCase.split(" ").map(Number));

function solution(testCases) {
  for (let i = 0; i < testCases.length; i++) {
    const cur = testCases[i];
    let cnt = 0;

    for (let j = 0; j < cur.length; j++) {
      for (let k = 0; k < j; k++) {
        if (cur[k] > cur[j]) cnt++;
      }
    }

    console.log(`${i + 1} ${cnt}`);
  }
}

solution(testCases);
