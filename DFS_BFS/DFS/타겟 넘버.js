// 프로그래머스 > 깊이/너비 우선 탐색(DFS/BFS) > 타겟 넘버
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;
  const n = numbers.length;

  const DFS = (L, sum) => {
    if (L === n) {
      if (sum === target) answer++;
      return;
    }

    // L: 현재까지 선택한 숫자의 개수(깊이)
    DFS(L + 1, sum + numbers[L]); // + 선택
    DFS(L + 1, sum - numbers[L]); // - 선택
  };

  DFS(0, 0);

  return answer;
}
