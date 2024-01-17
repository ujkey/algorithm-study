function solutionB(s) {
  let answer = "YES"; // 올바른 괄호이면 YES, 올바르지 않으면 'NO'
  const stack = [];

  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  if (stack.length > 0) return "NO";
  return answer;
}

function solutionA(s) {
  let answer = "YES"; // 올바른 괄호이면 YES, 올바르지 않으면 'NO'
  const stack = [];

  const peek = () => stack.length && stack.at(-1);

  [...s].forEach((v) => {
    const cur = v;
    if (cur === ")") {
      if (peek() === "(") {
        stack.pop();
      } else {
        stack.push(cur);
      }
    } else {
      stack.push(cur);
    }
  });

  if (stack.length > 0) return "NO";
  return answer;
}

let a = "(()(()))(()"; //NO
let b = "(()(()))(())"; //YES
console.log(solutionA(a));
console.log(solutionB(a));
