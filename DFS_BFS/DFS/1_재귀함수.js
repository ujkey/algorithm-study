function solution(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }

  DFS(n);
}

solution(3);

// DFS(1); -> 1
// DFS(2); -> 2
// DFS(3); -> 3
