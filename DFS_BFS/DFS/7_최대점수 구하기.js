function solution(limit, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER; // 최대값을 구해야 하므로 초기값을 가장 작은 값으로 설정

  function DFS(L, sum, time) {
    if (time > limit) return;
    else {
      answer = Math.max(answer, sum);
      for (let i = L; i < ps.length; i++) {
        DFS(i + 1, sum + ps[i], time + pt[i]);
      }
    }
  }
  DFS(0, 0, 0);

  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
