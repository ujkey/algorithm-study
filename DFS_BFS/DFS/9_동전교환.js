function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER; // 가장 적은 수의 동전으로 거슬러 줄 수 있는 경우의 수(최소 동전 개수)
  let n = arr.length;

  function DFS(L, sum) {
    if (sum > m) return; // 가지치기(넘어가면 더이상 볼 필요 없음)
    if (L >= answer) return; // 가지치기(최소값보다 크면 더이상 볼 필요 없음)
    if (sum === m) {
      answer = Math.min(answer, L); // 최소값으로 갱신
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
