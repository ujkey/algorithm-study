// 스택 > 4949_균형잡힌 세상
// https://www.acmicpc.net/problem/4949

const { Stack } = require("./stack.js");

const readInputFromFile = (filePath) => {
  try {
    const input = require("fs")
      .readFileSync(filePath, "utf-8")
      .trim()
      .split("\n");
    return input;
  } catch (error) {
    console.error("Error reading input file:", error.message);
    return [];
  }
};

const input = readInputFromFile("./example.txt"); // /dev/stdin
