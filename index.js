const fs = require("fs");
const itemWithLinks = require("./items_with_links");

const lines = fs
  .readFileSync("./batlista_2023_v3_wip.txt", "utf-8")
  .split(/\r?\n/);

const itemStartIndex = lines
  .filter((line, index) => line === lines[index + 1])
  .map((name) => lines.indexOf(name));

const items = itemStartIndex.map((index) => {
  const name = lines[index];
  const linkSegments = itemWithLinks
    .find((i) => i.alt === name)
    ?.href?.split("-");
  const id = linkSegments ? linkSegments[linkSegments.length - 1] : null;
  const [amount, unit] = lines[index + 4].split(" ");
  return {
    name,
    amount,
    unit,
    id,
  };
});

// console.log(JSON.stringify(items, null, 2));
// console.log(items.filter((i) => !i.id));

console.log(JSON.stringify(items));
