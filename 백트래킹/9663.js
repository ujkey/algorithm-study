// 9663_N-Queen
// https://www.acmicpc.net/problem/9663
// resolved > 10932KB, 10584ms

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split(" ");

const N = parseInt(resource[0]);

function solution(N) {
  let answer = 0; // 퀸을 놓는 방법의 수
  const board = Array.from({ length: N }, () => Array(N).fill(0)); // 체스판(2차원 배열)

  // 현재 위치에 퀸을 놓을 수 있는지 확인
  function isPossible(row, col) {
    // 같은 열에 퀸이 있는지 확인
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 1) return false;
    }

    // 왼쪽 위 대각선에 퀸이 있는지 확인
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 1) return false;
    }

    // 오른쪽 위 대각선에 퀸이 있는지 확인
    for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
      if (board[i][j] === 1) return false;
    }

    return true;
  }

  function placeQueens(row) {
    if (row === N) {
      answer++;
      return;
    }

    for (let col = 0; col < N; col++) {
      if (isPossible(row, col)) {
        board[row][col] = 1;
        placeQueens(row + 1);
        board[row][col] = 0; // backtracking
      }
    }
  }

  placeQueens(0);
  console.log(answer);
}

solution(N);
