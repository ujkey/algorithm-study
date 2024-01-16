// 그리디 알고리즘 > 2839_설탕배달
// https://www.acmicpc.net/problem/2839
// resolve > 9336KB, 132ms

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs").readFileSync(filePath, "utf-8").trim();

const input = parseInt(resource);
function solution(n) {
  let answer = 0; // 상근이가 배달하는 봉지의 최소 개수
  let cur = n; // 현재 남은 설탕 무게

  while (cur > 0) {
    if (cur % 5 === 0) {
      cur -= 5;
    } else {
      cur -= 3;
    }
    answer++;
  }

  console.log(cur === 0 ? answer : -1);
}

solution(input);
