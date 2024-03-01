// 프로그래머스 >  DP > 정수 삼각형
// https://school.programmers.co.kr/learn/courses/30/lessons/43105
// not resolved > 정확성: 64.3, 효율성: 35.7

function solution(triangle) {
  let answer = 0; // 거쳐간 숫자의 최대값  = 마지막 행의 최대값

  const N = triangle.length; // 행

  // DP 배열 생성
  const DP = new Array(N).fill(0).map(() => new Array(M).fill(0));

  // 첫번째 행은 triangle의 첫번째 행과 같다
  for (let i = 0; i < M; i++) {
    DP[0][i] = triangle[0][i];
  }

  // DP 배열을 채우기
  for (let i = 1; i < N; i++) {
    // 행(i)
    for (let j = 0; j < triangle[i].length; j++) {
      // 열(j)
      // 행마다 열의 길이가 다름
      if (j === 0) {
        // 첫번째 열은 이전 행의 첫번째 열만 더해준다
        DP[i][j] = triangle[i][j] + DP[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        // 마지막 열은 이전 행의 마지막 열만 더해준다
        DP[i][j] = triangle[i][j] + DP[i - 1][j - 1];
      } else {
        // 중간 열은 이전 행의 같은 열과 이전 행의 같은 열에서 -1한 열 중 최대값을 더해준다
        DP[i][j] = triangle[i][j] + Math.max(DP[i - 1][j], DP[i - 1][j - 1]);
      }

      // console.log(DP);
    }
  }

  answer = Math.max(...DP[N - 1]);
  return answer;
}
