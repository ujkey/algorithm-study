// 완전탐색 > 2798_블랙잭
// https://www.acmicpc.net/problem/2798
// resolve > 9608KB, 176ms

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const M = resource[0].split(" ")[1] * 1;
const cards = resource[1].split(" ")?.map((v) => v * 1);

const solution = (cards, M) => {
  // 3장의 카드를 뽑는 모든 조합의 경우의 수 > 3중 for문
  // 합이 M보다 작으면서 + 가장 가까운 조합 찾기 > maxVal 변수에 저장하여 비교
  // +) 불필요한 반복을 줄이기 위해 인덱스를 조정하기
  let maxVal = 0;

  for (let a = 0; a < cards.length - 2; a++) {
    for (let b = a + 1; b < cards.length - 1; b++) {
      for (let c = b + 1; c < cards.length; c++) {
        const curSum = cards[a] + cards[b] + cards[c];
        if (curSum <= M && curSum > maxVal) maxVal = curSum;
      }
    }
  }

  console.log(maxVal);
};

solution(cards, M);
