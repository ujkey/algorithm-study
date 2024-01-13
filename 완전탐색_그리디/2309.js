// 완전탐색 > 2309_일곱 난쟁이
// https://www.acmicpc.net/problem/2309
// clear > 9336KB, 124ms

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const input = [...resource.map((v) => v * 1)];

const solution = (input) => {
  let sum = 0;
  let answer = []; // 진짜 난장이들의 키를 담을 배열(가짜 난장이 제외)
  const temp = input.slice();

  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      sum = temp.reduce((acc, cur) => acc + cur, 0);

      // 일곱난장이의 키의 합은 100 이므로, 가짜 난장이를 제외한 나머지 키의 합이 100이면 된다
      if (sum - temp[i] - temp[j] === 100) {
        answer = input.filter((v) => v !== temp[i] && v !== temp[j]);
        break;
      }
    }
  }

  console.log(answer.sort((a, b) => a - b).join("\n")); // DESC
};

solution(input);
