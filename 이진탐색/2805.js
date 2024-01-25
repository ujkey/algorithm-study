// 2805_나무 자르기
// https://www.acmicpc.net/problem/2805
// resolve > 130284KB, 1080ms

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const input = resource[0].split(" ").map(Number);
const target = input[1]; // 가져가려는 나무의 길이
const tree = resource[1].split(" ").map(Number); // 나무의 높이

function solution(target, tree) {
  const sorted = tree.sort((a, b) => a - b);
  let answer = 0; // 잘라서 가져갈 수 있는 나무의 최대 길이
  let left = 0;
  let right = sorted[tree.length - 1]; // 가장 큰 나무의 높이

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 절단기의 높이 지정
    let sum = 0;
    // mid로 나무를 잘랐을 떄 가져갈 수 있는 나무의 길이 계산
    for (let x of sorted) {
      if (x > mid) sum += x - mid;
    }

    if (sum >= target) {
      if (mid > answer) answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(answer);
}

solution(target, tree);
