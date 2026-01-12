const fs = require("fs");

const COLORS = {
  JS: "#f1e05a",
  TS: "#3178c6",
  PY: "#3572A5",
  EMPTY: "#2d333b"
};

const BOX = 14;
const GAP = 4;
const MONTH_GAP = 16;
const START_Y = 40;

const progress = fs.existsSync("progress.json")
  ? JSON.parse(fs.readFileSync("progress.json"))
  : {};

function format(d) {
  return d.toISOString().slice(0, 10);
}

const startYear = 2026;
const endYear = 2026;

let svgWidth = 1400;
let svgHeight = 220;

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">`;

let xCursor = 0;

for (let month = 0; month < 12; month++) {
  const monthStart = new Date(startYear, month, 1);
  const monthName = monthStart.toLocaleString("en-US", { month: "short" });

  const daysInMonth = new Date(startYear, month + 1, 0).getDate();

  // Month label
  svg += `
    <text x="${xCursor}" y="20" fill="#adbac7" font-size="12">
      ${monthName}
    </text>
  `;

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(startYear, month, day);
    const key = format(date);

    const fill = progress[key]
      ? COLORS[progress[key]]
      : COLORS.EMPTY;

    const col = Math.floor((day - 1) / 7);
    const row = (day - 1) % 7;

    const x = xCursor + col * (BOX + GAP);
    const y = START_Y + row * (BOX + GAP);

    svg += `
      <rect
        x="${x}"
        y="${y}"
        width="${BOX}"
        height="${BOX}"
        rx="3"
        fill="${fill}"
      />
    `;
  }

  const weeksInMonth = Math.ceil(daysInMonth / 7);
  xCursor += weeksInMonth * (BOX + GAP) + MONTH_GAP;
}

svg += `</svg>`;

fs.writeFileSync("heatmap.svg", svg);
