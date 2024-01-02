function solutionA(n, k, card) {
  const answer = new Set(); // 3장의 카드를 뽑고 합을 기록
  const sorted = card.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      for (let z = j + 1; z < sorted.length; z++) {
        if (answer.size < k) {
          const sum = sorted[i] + sorted[j] + sorted[z];
          answer.add(sum);
        } else if (answer.size === k) break;
      }
    }
  }

  const result = Array.from(answer)[k - 1];

  return result; // K번째로 큰 수를 출력
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log("solutionA:", solutionA(10, 3, arr));
