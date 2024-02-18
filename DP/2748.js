// 2748_피보나치 수 2
// URL: https://www.acmicpc.net/problem/2748
// resolved > 9332KB, 124ms

// DP : 기억하기 알고리즘
// 메모리를 사용 -> 중복연산을 최소화

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const N = require("fs").readFileSync(filePath, "utf-8") * 1;

// console.log(N);

function solution(N) {
  const memory = [0, 1];

  for (let i = 1; i < N; i++) {
    // BigInt : 큰 정수를 나타내기 위한 내장 객체
    // N은 90이하의 자연수
    // 피보나치 수열을 구할 때, 90번째 수는 2880067194370816120으로 Number 범위를 넘어가게 된다.
    // 최대 범위를 넘은 값을 나타내기 위해 BigInt 객체를 사용
    memory[i + 1] = BigInt(memory[i]) + BigInt(memory[i - 1]);
  }

  // BigInt to string
  console.log(memory[N].toString()); // 피보나치 수열의 N번째 수
}
solution(N);
