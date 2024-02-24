// 프로그래머스 > DP > 땅따먹기
// https://school.programmers.co.kr/learn/courses/30/lessons/12913
// resolved > 정확성: 59.8, 효율성: 40.2

function solution(land) {
  let answer = 0; //점수의 최대값 = 마지막 행의 최대값

  const N = land.length; //행의 개수
  const M = 4; //열의 개수는 4개로 고정

  //DP 배열 생성
  const DP = new Array(N).fill(0).map(() => new Array(M).fill(0));
  // console.log(DP);

  //첫번째 행은 land의 첫번째 행과 같다.
  for (let i = 0; i < M; i++) {
    DP[0][i] = land[0][i];
  }

  // DP 배열을 채우기
  for (let i = 1; i < N; i++) {
    //행(i)
    for (let j = 0; j < M; j++) {
      // 열(j)
      // [조건] 같은 열을 연속해서 밟을 수 없다
      // --> 이전 행의 같은 열을 제외한 나머지 열 중 최대값을 현재 열에 더해준다

      // k : DP 배열에서 이전 행의 열(누적된 점수를 비교하기 위함)
      for (let k = 0; k < M; k++) {
        if (j !== k) DP[i][j] = Math.max(DP[i][j], land[i][j] + DP[i - 1][k]);
        // console.log(DP);
      }
    }
  }

  answer = Math.max(...DP[N - 1]);
  return answer;
}
