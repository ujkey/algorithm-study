function solution(m, product) {
  let answer = 0; // 현재 예산으로 선물할 수 있는 최대 학생수
  const budget = m; // 예산

  // 상품가격과 배송비를 합친 값을 기준으로 정렬
  const sorted = product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // 모든 상품에 할인을 적용해봄(완전 탐색)
  sorted.forEach((p, i) => {
    let rest = budget - (p[0] * 0.5 + p[1]); //남은 예산
    let count = 1; //현재 상품을 살 수 있는 학생 수
    sorted.forEach((_p, j) => {
      if (j !== i && _p[0] + _p[1] > rest) return; //학생수가 많은 경우
      if (j !== i && _p[0] + _p[1] <= rest) {
        rest -= _p[0] + _p[1];
        count++;
      }
    });

    answer = Math.max(answer, count);
  });

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
