import { type ReactNode } from "react";
import { Stepper } from "spectacle";
import { BlockMath } from "./Math.tsx";

const GRID_SIZE = 4;
const CELL_W = 64;
const CELL_H = 40;
const HEADER = 32;
const PAD = 16;
const DOTS_W = 40; // dots列/行の幅

const COLOR_X = "#0f3460";
const COLOR_Y = "#e94560";

function cantorPair(x: number, y: number): number {
  return ((x + y) * (x + y + 1)) / 2 + y;
}

// ジグザグ順 (対角線順)
function generateZigzagOrder(size: number): readonly { readonly x: number; readonly y: number }[] {
  const result: { readonly x: number; readonly y: number }[] = [];
  for (let diag = 0; diag < size * 2 - 1; diag++) {
    for (let y = 0; y <= diag; y++) {
      const x = diag - y;
      if (x < size && y < size) {
        result.push({ x, y });
      }
    }
  }
  return result;
}

const zigzagOrder = generateZigzagOrder(GRID_SIZE);

// 1セルずつ: (0,0)→(1,0)→(0,1)→(2,0)→(1,1)→(0,2)、その後一気に(0,3)まで
// values = 表示セル数: [1, 2, 3, 4, 5, 6, 10]
const stepperValues = [1, 2, 3, 4, 5, 6, 10];

// 各セルのジグザグ通し番号
const cellIndexMap: ReadonlyMap<string, number> = (() => {
  const map = new Map<string, number>();
  zigzagOrder.forEach((p, i) => { map.set(`${p.x},${p.y}`, i); });
  return map;
})();

function cellPos(col: number, row: number): { readonly x: number; readonly y: number } {
  return {
    x: PAD + HEADER + col * CELL_W,
    y: PAD + HEADER + row * CELL_H,
  };
}

function cellCenter(col: number, row: number): { readonly cx: number; readonly cy: number } {
  const p = cellPos(col, row);
  return { cx: p.x + CELL_W / 2, cy: p.y + CELL_H / 2 };
}

function buildFormula(current: { readonly x: number; readonly y: number } | undefined): string {
  const cx = `{\\color{${COLOR_X}}x}`;
  const cy = `{\\color{${COLOR_Y}}y}`;
  const base = `f(${cx},\\, ${cy}) := \\frac{(${cx} + ${cy})(${cx} + ${cy} + 1) + 2${cy}}{2}`;

  if (current === undefined) return base;

  const { x, y } = current;
  const xStr = `{\\color{${COLOR_X}}${x}}`;
  const yStr = `{\\color{${COLOR_Y}}${y}}`;
  const result = cantorPair(x, y);

  return `f(${xStr},\\, ${yStr}) = \\frac{(${xStr} + ${yStr})(${xStr} + ${yStr} + 1) + 2 \\cdot ${yStr}}{2} = \\mathbf{${result}}`;
}

function computeCellFill(globalIdx: number, shownCount: number, isLatest: boolean): string {
  if (globalIdx < 0) return "none";
  if (isLatest) return "rgba(233, 69, 96, 0.2)";
  if (globalIdx < shownCount) return "rgba(15, 52, 96, 0.05)";
  return "none";
}

export function CantorPairingGrid(): ReactNode {
  const svgW = PAD * 2 + HEADER + GRID_SIZE * CELL_W + DOTS_W;
  const svgH = PAD * 2 + HEADER + GRID_SIZE * CELL_H + DOTS_W;

  return (
    <Stepper values={stepperValues} alwaysVisible>
      {(value: unknown, _step: number) => {
        const shownCount = typeof value === "number" ? value : 0;
        const currentCell = shownCount > 0 ? zigzagOrder[shownCount - 1] : undefined;

        return (
          <div key={`pairing-${shownCount}`}>
            <div style={{ fontSize: "20px", margin: "0 0 2px 0" }}>
              <BlockMath>{buildFormula(shownCount > 0 ? currentCell : undefined)}</BlockMath>
            </div>
            <svg
              viewBox={`0 0 ${svgW} ${svgH}`}
              style={{ width: "100%", maxWidth: "480px", display: "block", margin: "0 auto" }}
            >
              <defs>
                <marker
                  id="pair-arrow"
                  markerWidth="7"
                  markerHeight="5"
                  refX="6"
                  refY="2.5"
                  orient="auto"
                >
                  <polygon points="0 0, 7 2.5, 0 5" fill="#e94560" opacity="0.7" />
                </marker>
              </defs>

              {/* 左上角 P */}
              <text
                x={PAD + HEADER / 2}
                y={PAD + HEADER / 2 + 5}
                textAnchor="middle"
                fontSize="14"
                fontWeight="bold"
                fill="#1a1a2e"
                fontFamily='"Noto Serif JP", serif'
              >
                P
              </text>

              {/* x ヘッダー（上） */}
              {Array.from({ length: GRID_SIZE }, (_, col) => (
                <text
                  key={`hx-${col}`}
                  x={cellPos(col, 0).x + CELL_W / 2}
                  y={PAD + HEADER / 2 + 5}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="bold"
                  fill={COLOR_X}
                  fontFamily='"Noto Serif JP", serif'
                >
                  {col}
                </text>
              ))}

              {/* x ラベル */}
              <text
                x={PAD + HEADER + (GRID_SIZE * CELL_W) / 2}
                y={PAD - 1}
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fontStyle="italic"
                fill={COLOR_X}
                fontFamily='"Noto Serif JP", serif'
              >
                x →
              </text>

              {/* y ヘッダー（左） */}
              {Array.from({ length: GRID_SIZE }, (_, row) => (
                <text
                  key={`hy-${row}`}
                  x={PAD + HEADER / 2}
                  y={cellPos(0, row).y + CELL_H / 2 + 5}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="bold"
                  fill={COLOR_Y}
                  fontFamily='"Noto Serif JP", serif'
                >
                  {row}
                </text>
              ))}

              {/* y ラベル（下向き矢印） */}
              <text
                x={PAD - 1}
                y={PAD + HEADER + (GRID_SIZE * CELL_H) / 2}
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fontStyle="italic"
                fill={COLOR_Y}
                fontFamily='"Noto Serif JP", serif'
                transform={`rotate(-90, ${PAD - 1}, ${PAD + HEADER + (GRID_SIZE * CELL_H) / 2})`}
              >
                ← y
              </text>

              {/* グリッドセル */}
              {Array.from({ length: GRID_SIZE }, (_, row) =>
                Array.from({ length: GRID_SIZE }, (_, col) => {
                  const pos = cellPos(col, row);
                  const globalIdx = cellIndexMap.get(`${col},${row}`) ?? -1;
                  const isNumbered = globalIdx >= 0 && globalIdx < shownCount;
                  const isLatest = currentCell !== undefined && col === currentCell.x && row === currentCell.y;
                  const fill = computeCellFill(globalIdx, shownCount, isLatest);

                  return (
                    <g key={`cell-${col}-${row}`}>
                      <rect
                        x={pos.x}
                        y={pos.y}
                        width={CELL_W}
                        height={CELL_H}
                        fill={fill}
                        stroke={isLatest ? COLOR_Y : "rgba(26, 26, 46, 0.15)"}
                        strokeWidth={isLatest ? 2 : 1}
                        rx={3}
                      />
                      {isNumbered ? (
                        <text
                          x={pos.x + CELL_W / 2}
                          y={pos.y + CELL_H / 2 + 5}
                          textAnchor="middle"
                          fontSize="15"
                          fontWeight="bold"
                          fill="#1a1a2e"
                          fontFamily='"Noto Serif JP", serif'
                        >
                          {cantorPair(col, row)}
                        </text>
                      ) : (
                        <text
                          x={pos.x + CELL_W / 2}
                          y={pos.y + CELL_H / 2 + 4}
                          textAnchor="middle"
                          fontSize="11"
                          fill="rgba(26, 26, 46, 0.25)"
                          fontFamily='"Noto Serif JP", serif'
                        >
                          (<tspan fill={COLOR_X} opacity="0.4">{col}</tspan>,<tspan fill={COLOR_Y} opacity="0.4">{row}</tspan>)
                        </text>
                      )}
                    </g>
                  );
                })
              )}

              {/* 右端 dots 列 */}
              {Array.from({ length: GRID_SIZE }, (_, row) => {
                const x = PAD + HEADER + GRID_SIZE * CELL_W;
                const y = PAD + HEADER + row * CELL_H;
                return (
                  <g key={`dots-col-${row}`}>
                    <rect x={x} y={y} width={DOTS_W} height={CELL_H}
                      fill="none" stroke="rgba(26, 26, 46, 0.1)" strokeWidth={1} strokeDasharray="4 3" rx={3} />
                    <text x={x + DOTS_W / 2} y={y + CELL_H / 2 + 4} textAnchor="middle"
                      fontSize="16" fill="rgba(26, 26, 46, 0.3)" fontFamily='"Noto Serif JP", serif'>…</text>
                  </g>
                );
              })}

              {/* 下端 dots 行 */}
              {Array.from({ length: GRID_SIZE }, (_, col) => {
                const x = PAD + HEADER + col * CELL_W;
                const y = PAD + HEADER + GRID_SIZE * CELL_H;
                return (
                  <g key={`dots-row-${col}`}>
                    <rect x={x} y={y} width={CELL_W} height={DOTS_W}
                      fill="none" stroke="rgba(26, 26, 46, 0.1)" strokeWidth={1} strokeDasharray="4 3" rx={3} />
                    <text x={x + CELL_W / 2} y={y + DOTS_W / 2 + 4} textAnchor="middle"
                      fontSize="16" fill="rgba(26, 26, 46, 0.3)" fontFamily='"Noto Serif JP", serif'>⋮</text>
                  </g>
                );
              })}

              {/* 右下角 ⋱ */}
              <rect
                x={PAD + HEADER + GRID_SIZE * CELL_W} y={PAD + HEADER + GRID_SIZE * CELL_H}
                width={DOTS_W} height={DOTS_W}
                fill="none" stroke="rgba(26, 26, 46, 0.1)" strokeWidth={1} strokeDasharray="4 3" rx={3}
              />
              <text
                x={PAD + HEADER + GRID_SIZE * CELL_W + DOTS_W / 2}
                y={PAD + HEADER + GRID_SIZE * CELL_H + DOTS_W / 2 + 5}
                textAnchor="middle" fontSize="18" fill="rgba(26, 26, 46, 0.3)" fontFamily='"Noto Serif JP", serif'
              >⋱</text>

              {/* 矢印 */}
              {zigzagOrder.slice(0, Math.max(0, shownCount - 1)).map((from, i) => {
                const to = zigzagOrder[i + 1];
                if (!to) return null;
                const f = cellCenter(from.x, from.y);
                const t = cellCenter(to.x, to.y);
                const dx = t.cx - f.cx;
                const dy = t.cy - f.cy;
                const len = Math.sqrt(dx * dx + dy * dy);
                const shrink = 14;
                return (
                  <line
                    key={`arrow-${i}`}
                    x1={f.cx + (dx / len) * shrink}
                    y1={f.cy + (dy / len) * shrink}
                    x2={t.cx - (dx / len) * shrink}
                    y2={t.cy - (dy / len) * shrink}
                    stroke="#e94560"
                    strokeWidth={1.2}
                    markerEnd="url(#pair-arrow)"
                    opacity={0.5}
                  />
                );
              })}
            </svg>
          </div>
        );
      }}
    </Stepper>
  );
}
