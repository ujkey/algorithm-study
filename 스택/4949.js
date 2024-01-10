// 스택 > 4949_균형잡힌 세상
// https://www.acmicpc.net/problem/4949

// const Stack = require("./stack").Stack;

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = require("fs").readFileSync(filePath, "utf-8").trim().split("\n");

const answer = [];
const TARGET = ["(", ")", "[", "]"];
input.pop(); // 마지막 줄은 .이므로 제거

// stack method
const getLastElement = (arr) => arr[arr.length - 1];
const isEmpty = (arr) => arr.length === 0;

input.forEach((str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (TARGET.includes(str[i])) {
      if (isEmpty(stack)) {
        stack.push(str[i]);
      } else if (getLastElement(stack) === "(" && str[i] === ")") {
        stack.pop();
      } else if (getLastElement(stack) === "[" && str[i] === "]") {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      continue;
    }
  }

  isEmpty(stack) ? answer.push("yes") : answer.push("no");
});

console.log(answer.join("\n"));

/* 
  프로그래머스에서는 솔루션 작성에 집중할 수 있었지만, 
  백준에서는 Node.js 환경에서 풀이해야 하기 때문에, 데이터 입력 처리와 솔루션을 위한 데이터 가공까지 직접 다뤄야 했다. 
  처음에는 익숙하지 않아 어려움을 겪었지만, 조금씩 적응해나가면 큰 문제 없을 것 같다. 
*/
