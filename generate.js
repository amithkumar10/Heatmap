const fs = require("fs");

const COLORS = {
  JS: "#f1e05a",
  TS: "#3178c6",
  PY: "#3572A5"
};

const msg = process.env.COMMIT_MSG || "";
const today = new Date().toISOString().slice(0, 10);

const lang = Object.keys(COLORS).find(l => msg.includes(l));
if (!lang) process.exit(0);

const data = fs.existsSync("progress.json")
  ? JSON.parse(fs.readFileSync("progress.json"))
  : {};

data[today] = lang;
fs.writeFileSync("progress.json", JSON.stringify(data, null, 2));

// simple horizontal heatmap
let x = 0;
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="120">`;

Object.values(data).forEach(l => {
  svg += `<rect x="${x}" y="40" width="15" height="15" rx="3" fill="${COLORS[l]}"/>`;
  x += 18;
});

svg += `</svg>`;
fs.writeFileSync("heatmap.svg", svg);
