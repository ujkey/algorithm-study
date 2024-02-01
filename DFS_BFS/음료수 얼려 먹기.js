// DFS > 음료수 얼려 먹기
// https://www.youtube.com/watch?v=7C9RgOcvkvo
// resolved

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const [N, M] = resource[0].split(" ").map(Number);
const frame = resource.slice(1).map((v) => v.split("").map(Number));

function solution(N, M, frame) {
  let answer = 0; // 한번에 만들 수 있는 음료수의 개수

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!!DFS(i, j)) answer++;
    }
  }

  console.log(answer);
}

const DFS = (x, y) => {
  if (x < 0 || x >= N || y < 0 || y >= M) return false;

  if (frame[x][y] === 0) {
    frame[x][y] = 1; // 방문처리

    // 상하좌우 재귀적으로 호출
    DFS(x - 1, y); // 상
    DFS(x, y - 1); // 좌
    DFS(x + 1, y); // 하
    DFS(x, y + 1); // 우

    return true; // 음료수 만들 수 있음
  }

  return false; // 음료수 만들 수 없음
};

solution(N, M, frame);
