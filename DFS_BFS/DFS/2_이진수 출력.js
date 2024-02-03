function solution(n) {
  let answer = "";

  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(parseInt(L / 2));
      answer += L % 2; // 0 or 1
      //   console.log(answer);
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(11));

// DFS(11)
// DFS(5), answer = '1'
// DFS(2), answer = '10'
// DFS(1), answer = '101'
// DFS(0), answer = '1011'
