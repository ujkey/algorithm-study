function solution(arr) {
  let answer = "NO";
  let flag = 0; // 합이 같은 부분집합이 존재하는지 여부를 판단하는 flag
  const total = arr.reduce((acc, cur) => acc + cur, 0);
  let n = arr.length;

  function DFS(L, sum) {
    if (L === n) {
      if (flag) return; // 합이 같은 부분집합이 존재하면 더 이상 탐색할 필요가 없음
      if (total - sum === sum) {
        // 두 부분집합의 합이 같은 경우
        answer = "YES";
        flag = 1; // 다시 탐색하지 않도록 flag를 1로 설정
      }
    } else {
      DFS(L + 1, sum + arr[L]); // L번째 원소를 부분집합에 포함시킴
      DFS(L + 1, sum); // L번째 원소를 부분집합에 포함시키지 않음
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
