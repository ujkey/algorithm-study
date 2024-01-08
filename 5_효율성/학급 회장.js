function solutionB(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

function solutionA(s) {
  let answer;
  let result = new Map();

  [...s].forEach((v) => {
    result.set(v, (result.get(v) || 0) + 1);
  });

  answer = [...result.entries()].reduce((a, b) => (a[1] > b[1] ? a : b), [])[0];
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log("solutionB :", solutionB(str));
console.log("solutionA :", solutionA(str));
