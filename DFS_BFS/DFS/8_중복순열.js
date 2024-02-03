// '중복을 허락하여' 1부터 n까지 자연수 중 m개를 고른 수열
function solutionA(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0); // 현재까지 선택한 수열을 담을 배열, 초기값 0 설정

  function DFS(L) {
    // L: 현재까지 선택한 숫자의 개수(깊이)
    if (L === m) {
      // 최종 레벨에 도달한 경우
      answer.push(tmp.slice());
    } else {
      // 레벨을 증가시키면서 재귀
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1); // 다음 레벨로 재귀 호출
      }
    }
  }

  DFS(0);
  return answer;
}

console.log("중복 허용: ", solutionA(3, 2));

// '중복을 허락하지 않고' 1부터 n까지 자연수 중 m개를 고른 수열
function solutionB(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0); // 현재까지 선택한 수열을 담을 배열, 초기값 0 설정
  let visited = Array.from({ length: n }, () => false); // 숫자의 방문 여부를 기록

  function DFS(L) {
    // L: 현재까지 선택한 숫자의 개수(깊이)
    if (L === m) {
      // 최종 레벨에 도달한 경우
      answer.push(tmp.slice());
    } else {
      // 레벨을 증가시키면서 재귀
      for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
          // 방문하지 않은 경우에만
          visited[i] = true; // 방문 여부를 true로 변경
          tmp[L] = i;
          DFS(L + 1); // 다음 레벨로 재귀 호출
          visited[i] = false; // 재귀가 끝나면 방문 여부를 false로 변경
        }
      }
    }
  }

  DFS(0);
  return answer;
}

console.log("중복 미허용: ", solutionB(3, 2));
