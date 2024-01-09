// 1차
function solutionA(str1, str2) {
  let answer = "No"; // 두 문자열이 알파벳과 개수가 모두 일치하는지 확인
  const strCount = new Map();

  [...str1].forEach((v) => strCount.set(v, (strCount.has(v) || 0)+1));
  [...str2].forEach((v) => {
    if( strCount.get(v) > 1) {
      strCount.set(v, strCount.has(v)-1)
    } else {
      strCount.delete(v);
      answer = 'YES';
    }
  })

  return answer;
}

// input_1_YES
let a = "AbaAeCe";
let b = "baeeACA";
// input_2_NO
// let a = "abaCC";
// let b = "Caaab";
console.log('solution A:', solutionA(a, b));

