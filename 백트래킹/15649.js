// 15649_N과M(1)
// https://www.acmicpc.net/problem/15649
// resolved > 33112KB, 2536ms

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .split(" ");

const [N, M] = resource.map(Number);

// nCm
function solution(N, M) {
  const answer = []; // N가지의 수 중 '중복없이' M개를 뽑아 만들 수 있는 모든 경우의 수
  const tmp = Array.from({ length: M }, () => 0);
  const visited = Array.from({ length: N }, () => false);

  function DFS(L) {
    if (L === M) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
          visited[i] = true;
          tmp[L] = i;
          DFS(L + 1);
          visited[i] = false;
        }
      }
    }
  }

  DFS(0);
  answer.forEach((arr) => console.log(arr.join(" ")));
}

solution(N, M);
