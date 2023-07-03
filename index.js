const fs = require("fs");

const lines = fs
  .readFileSync("./batlista_2023_v3_wip.txt", "utf-8")
  .split(/\r?\n/);

const itemStartIndex = lines
  .filter((line, index) => line === lines[index + 1])
  .map((name) => lines.indexOf(name));

const items = itemStartIndex.map((index) => ({
  name: lines[index],
  amount: lines[index + 4],
}));

// console.log(JSON.stringify(items, null, 2));
console.log(items.length);
