// 프로그래머스 > 깊이/너비 우선 탐색(DFS/BFS) > 게임 맵 최단거리
// https://school.programmers.co.kr/learn/courses/30/lessons/1844
// resolved > 정확성: 69.9, 효율성: 30.1

function solution(maps) {
  const queue = []; // 현재 좌표를 담을 큐
  const n = maps.length; // 세로
  const m = maps[0].length; // 가로
  let x = 0;
  let y = 0;

  // 상하좌우 이동 좌표 설정
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  queue.push([x, y]); // 시작 좌표를 큐에 삽입

  // 현재 좌표가 범위 내에 있는지 확인
  const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

  while (queue.length) {
    const [x, y] = queue.shift(); // 현재 좌표

    // 현재 좌표 기준으로 상하좌우 이동하며 탐색
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]; // 다음 x 좌표
      const ny = y + dy[i]; // 다음 y 좌표

      // 1. 범위를 벗어난 경우
      if (!isValid(nx, ny)) continue;

      // 2. 장애물인 경우(값이 0인 경우)
      if (maps[nx][ny] === 0) continue;

      // 3. 열린 공간인 경우(값이 1인 경우)
      if (maps[nx][ny] === 1) {
        maps[nx][ny] = maps[x][y] + 1; // 이동한 칸의 개수를 이전 칸의 개수 + 1로 설정
        queue.push([nx, ny]); // 다음 좌표를 큐에 삽입
      }

      // 도착지에 도달한 경우
      if (nx === n - 1 && ny === m - 1) {
        return maps[nx][ny];
      }
    }
  }

  return -1; // 도착지에 도달하지 못한 경우
}
