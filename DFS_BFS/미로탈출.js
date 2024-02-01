// BFS > 미로 탈출
// https://www.youtube.com/watch?v=7C9RgOcvkvo
// resolved

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n");

const [N, M] = resource[0].split(" ").map(Number);
const maze = resource.slice(1).map((v) => v.split("").map(Number));

// console.log(N, M, maze);

function solution(N, M, maze) {
  const queue = [];
  let x = 0;
  let y = 0;

  // 상하좌우 이동 좌표 설정
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  queue.push([x, y]); // 시작 좌표를 큐에 삽입

  while (queue.length) {
    const [x, y] = queue.shift(); // 현재 좌표

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]; // 다음 x 좌표
      const ny = y + dy[i]; // 다음 y 좌표

      // 1. 범위를 벗어난 경우
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      // 2. 장애물인 경우(괴물이 있는 경우, 0)
      if (maze[nx][ny] === 0) continue;

      // 3. 열린 공간인 경우(괴물이 없는 경우, 1)
      if (maze[nx][ny] === 1) {
        maze[nx][ny] = maze[x][y] + 1; // 이동한 칸의 개수를 이전 칸의 개수 + 1로 설정
        queue.push([nx, ny]); // 다음 좌표를 큐에 삽입
      }
    }
  }

  console.log(maze[N - 1][M - 1]);
}

solution(N, M, maze);

// 1. queue에 [0, 0]을 넣고 시작 (queue.push([x, y]))
// 2. [0, 0]을 shift하고, 상하좌우 좌표를 구함 (const nx = x + dx[i], const ny = y + dy[i])
// 3. 좌표가 범위를 벗어나지 않고, 벽이 아니고, 이동할 수 있는 경우 (if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;)
// 4. 이동한 칸의 개수를 이전 칸의 개수 + 1로 설정 (maze[nx][ny] = maze[x][y] + 1)
// 5. 다음 좌표를 큐에 삽입 (queue.push([nx, ny]))
// 6. 2~5번을 반복하다가, queue가 비게 되면 종료
// 7. 종료 후, maze[N - 1][M - 1]을 출력
