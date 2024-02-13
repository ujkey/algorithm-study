// 1303_전쟁 - 전투
// https://www.acmicpc.net/problem/1303
// not resolved yet

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const [N, M] = resource[0].split(" ").map(Number);
const colors = resource.slice(1).map((v) => v.split(""));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

// console.log(N, M, colors);

function solution(N, M, colors) {
  let [white, blue] = [0, 0]; // W 병사의 위력, B 병사의 위력

  // 현재 좌표가 범위 내에 있는지 확인
  const isValid = (x, y) => x >= 0 && x < N && y >= 0 && y < M;
  //const visited = Array.from({ length: N }, () => Array(M).fill(false));

  function BFS(x, y) {
    let count = 0; // 같은 색깔의 병사 수
    const queue = [[x, y]]; // 방문한 곳을 담을 queue
    const curColor = colors[x][y]; // 현재 색깔
    colors[x][y] = 0; // 방문한 곳은 0으로 변경

    while (queue.length) {
      const [x, y] = queue.shift();
      count++;
      //   console.log(count);

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (isValid(nx, ny) && colors[nx][ny] === curColor) {
          colors[nx][ny] = 0; // 방문한 곳은 0으로 변경
          queue.push([nx, ny]); // 방문한 곳은 queue에 추가
        }
      }
    }

    if (curColor === "W") {
      white += count ** 2;
    } else {
      blue += count ** 2;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 방문하지 않은 경우, BFS 탐색
      if (colors[i][j]) BFS(i, j);
    }
  }

  console.log(white, blue);
}

solution(N, M, colors);
