// 그리디 알고리즘 > 10162_전자레인지
// https://www.acmicpc.net/problem/10162
// resolve > 9388KB, 164ms

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const resource = require("fs").readFileSync(filePath, "utf-8").trim();

const input = parseInt(resource);
const BUTTON = [300, 60, 10];

function solution(T) {
  // 버튼을 눌러 시간의 합이 T초가 되도록 한다
  // 출력 : 최소 버튼 조작의 각각의 횟수 -> A B C
  // 제시된 버튼으로 T초를 맞출 수 없는 경우 -1을 출력

  let time = T; // 총 요리시간
  const answer = []; // 최소버튼 조작 횟수 배열

  for (let i = 0; i < BUTTON.length; i++) {
    const count = Math.floor(time / BUTTON[i]); // main rule
    answer.push(count);
    time %= BUTTON[i];

    if (i === BUTTON.length - 1 && time !== 0) {
      console.log(-1); //출력 후 종료
      return;
    }
  }

  console.log(answer.join(" "));
}

solution(input);
