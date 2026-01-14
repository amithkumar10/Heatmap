const fs = require("fs");
const { execSync } = require("child_process");

const COLORS = {
  JS: "#fde047",      // yellow
  TS: "#3178c6",      // blue
  PY: "#3572A5",      // python blue
  EMPTY: "#0d1117"   // empty box
};

const BOX = 14;
const GAP = 4;
const MONTH_GAP = 16;
const START_Y = 40;

const progress = fs.existsSync("progress.json")
  ? JSON.parse(fs.readFileSync("progress.json", "utf-8"))
  : {};

// ---------- helpers ----------
function format(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// ---------- read LAST REAL commit ----------
let commitMsg = "";
try {
  commitMsg = execSync("git log -1 --pretty=%B").toString().trim();
} catch {
  commitMsg = "";
}

const msg = commitMsg.toUpperCase();

// ---------- update today's progress ----------
const today = new Date();
const todayKey = format(today);

if (msg.includes("JS")) progress[todayKey] = "JS";
else if (msg.includes("TS")) progress[todayKey] = "TS";
else if (msg.includes("PY")) progress[todayKey] = "PY";

// persist progress
fs.writeFileSync("progress.json", JSON.stringify(progress, null, 2));

// ---------- SVG generation ----------
const startYear = 2026;

  EMPTY: "#1d1b1b"   // empty box
  EMPTY: "#1d1b1b"   // empty box
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="220" style="background:#0d1117">`;

let xCursor = 0;

for (let month = 0; month < 12; month++) {
  const monthStart = new Date(startYear, month, 1);
  const monthName = monthStart.toLocaleString("en-US", { month: "short" });
  const daysInMonth = new Date(startYear, month + 1, 0).getDate();

  // month label
  svg += `
    <text x="${xCursor}" y="20" fill="#ffffff" font-size="12">
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
        stroke="#9be9a8"
        stroke-width="1"
      />
    `;
  }

  const weeksInMonth = Math.ceil(daysInMonth / 7);
  xCursor += weeksInMonth * (BOX + GAP) + MONTH_GAP;
}

svg += `</svg>`;

fs.writeFileSync("heatmap.svg", svg);
