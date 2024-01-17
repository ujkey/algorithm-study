// 스택 > 10799_쇠막대기
// https://www.acmicpc.net/problem/10799

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath, "utf-8").trim();

// console.log(input); ()(((()())(())()))(())

const answer = [];
const stack = [];
let count = 0; // 레이저로 잘린 쇠막대기 조각의 개수

for (let i = 0; i < input.length; i++) {
  stack.push(input[i]);

  if (input[i] === ")") {
    stack.pop();
    stack.pop();

    if (input[i - 1] === "(") {
      count += stack.length;
    } else {
      count++;
    }
  }

  // console.log(stack, count);
}

console.log(count);
