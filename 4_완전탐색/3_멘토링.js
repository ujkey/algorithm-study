function solution(test) {
  let answer = 0;

  const N = test[0].length; // 학생의 수
  const M = test.length; // 시험의 수
  const count = new Map();

  // 모든 경우의 수를 구함
  test.forEach((t) => {
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const pair = `${t[i]} ${t[j]}`;
        count.set(pair, count.get(pair) + 1 || 1);
      }
    }
  });

  count.forEach((v) => {
    if (v === M) {
      answer++;
    }
  });

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
