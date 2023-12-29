// 소수(Prime Number) : 1보다 큰 자연수 중, 1과 자기 자신만을 약수로 가지는 수
// 소수 판별 함수
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solutionA(arr) {
  const answer = [];

  for (let x of arr) {
    // 1. 숫자를 뒤집는다
    const cur = [...x.toString()].reverse().join("") * 1;

    // 2. 뒤집은 수가 소수인지 판별한다
    if (isPrime(cur)) answer.push(cur);
  }

  return answer;
}

function solutionB(arr) {
  const answer = [];

  for (let x of arr) {
    // 1. 숫자를 뒤집는다
    let res = 0; //result
    while (x) {
      const cur = x % 10; //2
      res = res * 10 + cur; //숫자 뒤집기
      x = parseInt(x / 10);
    }

    // 2. 뒤집은 수가 소수인지 판별한다
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log("solution A:", solutionA(arr));
console.log("solution B:", solutionB(arr));
