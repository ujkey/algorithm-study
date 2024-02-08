function solution(n, m) {
  let answer = []; // 중복순열을 담을 배열, 오름차순
  const tmp = Array.from({ length: m }, () => 0); // 중복순열을 담을 배열

  function DFS(L) {
    if (L === m) {
      // 중복 순열의 경우의수가 만들어짐
      answer.push(tmp.slice());
      return; // stack pop
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
