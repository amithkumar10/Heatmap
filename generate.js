const fs = require("fs");

const COLORS = {
  JS: "#f1e05a",
  TS: "#3178c6",
  PY: "#3572A5"
};

const EMPTY_FILL = "#ffffff";
const EMPTY_STROKE = "#9be9a8";

const BOX = 14;
const GAP = 4;
const MONTH_GAP = 10; // extra gap between months
const START_Y = 30;

const progress = fs.existsSync("progress.json")
  ? JSON.parse(fs.readFileSync("progress.json"))
  : {};

// helpers
function format(d) {
  return d.toISOString().slice(0, 10);
}

function getAllDates(start, end) {
  const dates = [];
  const cur = new Date(start);
  while (cur <= end) {
    dates.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return dates;
}

// range
const startDate = new Date();
const endDate = new Date("2026-12-31");

// normalize start to Sunday
startDate.setDate(startDate.getDate() - startDate.getDay());

const dates = getAllDates(startDate, endDate);

// SVG
let svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="230">
  <rect x="0" y="0" width="100%" height="100%" fill="#ffffff"/>
`;

let lastMonth = -1;
let monthOffset = 0;
let lastMonthWeek = 0;

dates.forEach((date, i) => {
  const week = Math.floor(i / 7);
  const day = date.getDay();

  // detect month change
  if (date.getMonth() !== lastMonth) {
    if (lastMonth !== -1) {
      monthOffset += MONTH_GAP;
    }

    const labelX =
      week * (BOX + GAP) + monthOffset;

    svg += `
      <text x="${labelX}" y="20" fill="#444" font-size="10">
        ${date.toLocaleString("en-US", { month: "short" })}
      </text>
    `;

    lastMonth = date.getMonth();
    lastMonthWeek = week;
  }

  const x =
    week * (BOX + GAP) + monthOffset;
  const y =
    START_Y + day * (BOX + GAP);

  const key = format(date);
  const lang = progress[key];
  const isFilled = !!lang;

  svg += `
    <rect
      x="${x}"
      y="${y}"
      width="${BOX}"
      height="${BOX}"
      rx="3"
      fill="${isFilled ? COLORS[lang] : EMPTY_FILL}"
      stroke="${isFilled ? "none" : EMPTY_STROKE}"
      stroke-width="1"
    />
  `;
});

svg += `</svg>`;

fs.writeFileSync("heatmap.svg", svg);
