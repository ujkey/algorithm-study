function solution(n) {
  let answer = [];
  let visited = Array.from({ length: n + 1 }, () => 0); // 0번째 인덱스는 사용하지 않음
  // console.log(visited);

  function DFS(L) {
    if (L === n + 1) {
      // 종착(부분집합이 완성되었을 때)
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (visited[i] === 1) tmp += i + " "; // 부분집합에 포함된 원소들을 출력
      }
      if (tmp.length) answer.push(tmp.trim()); // 공집합은 출력하지 않음

      return;
    } else {
      visited[L] = 1; // L번째 원소를 부분집합에 포함시킴
      DFS(L + 1);

      visited[L] = 0; // L번째 원소를 부분집합에 포함시키지 않음
      DFS(L + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(solution(3));
