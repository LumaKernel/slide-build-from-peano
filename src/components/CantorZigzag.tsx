import { type ReactNode } from "react";
import { Stepper } from "spectacle";

const GRID_SIZE = 4;
const CELL_W = 80;
const CELL_H = 50;
const PAD_LEFT = 30;
const PAD_TOP = 30;
const EXTRA = 50;

// 対角線ごとの累積セル数を事前計算: [0, 1, 3, 6, 10, ...]
function buildCumulativeCounts(size: number): readonly number[] {
  const counts: number[] = [0];
  let count = 0;
  for (let diag = 0; diag < size * 2 - 1; diag++) {
    for (let y = 0; y <= diag; y++) {
      const x = diag - y;
      if (x < size && y < size) count++;
    }
    counts.push(count);
  }
  return counts;
}

const cumulativeCounts = buildCumulativeCounts(GRID_SIZE);
const numDiags = cumulativeCounts.length - 1;

// ジグザグ順のフラット配列
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

const flatOrder = generateZigzagOrder(GRID_SIZE);

// 各セルの通し番号
const cellIndexMap: ReadonlyMap<string, number> = (() => {
  const map = new Map<string, number>();
  flatOrder.forEach((p, i) => { map.set(`${p.x},${p.y}`, i); });
  return map;
})();

// values[i] = i+1 (表示する対角線の本数)。step 0 → 対角線1本目
// (0,3)=9 まで表示 = 対角線4本目まで
const MAX_DIAGS = 4;
const stepperValues = Array.from({ length: MAX_DIAGS }, (_, i) => i + 1);

// 対角線本数から表示状態を純粋に計算
function computeShownCount(diagsShown: number): number {
  return cumulativeCounts[diagsShown] ?? flatOrder.length;
}

function computePrevCount(diagsShown: number): number {
  return cumulativeCounts[diagsShown - 1] ?? 0;
}

function cellCenter(col: number, row: number): { readonly cx: number; readonly cy: number } {
  return {
    cx: PAD_LEFT + col * CELL_W + CELL_W / 2,
    cy: PAD_TOP + row * CELL_H + CELL_H / 2,
  };
}

function computeCellFill(idx: number, shownCount: number, prevCount: number): string {
  if (idx < 0 || idx >= shownCount) return "none";
  if (idx >= prevCount) return "rgba(233, 69, 96, 0.15)";
  return "rgba(15, 52, 96, 0.06)";
}

export function CantorZigzag(): ReactNode {
  const svgW = PAD_LEFT + GRID_SIZE * CELL_W + EXTRA + 10;
  const svgH = PAD_TOP + GRID_SIZE * CELL_H + EXTRA + 10;

  return (
    <Stepper values={stepperValues} alwaysVisible>
      {(value: number, _step: number) => {
        const diagsShown = typeof value === "number" ? value : 0;
        const shownCount = computeShownCount(diagsShown);
        const prevCount = computePrevCount(diagsShown);

        return (
          <svg
            key={`zigzag-${diagsShown}`}
            viewBox={`0 0 ${svgW} ${svgH}`}
            style={{ width: "100%", maxWidth: "520px", display: "block", margin: "0 auto" }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="7"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#e94560" />
              </marker>
            </defs>

            {/* グリッドのセル */}
            {Array.from({ length: GRID_SIZE }, (_, row) =>
              Array.from({ length: GRID_SIZE }, (_, col) => {
                const x = PAD_LEFT + col * CELL_W;
                const y = PAD_TOP + row * CELL_H;
                const idx = cellIndexMap.get(`${col},${row}`) ?? -1;
                const isNumbered = idx >= 0 && idx < shownCount;
                const fill = computeCellFill(idx, shownCount, prevCount);

                return (
                  <g key={`cell-${col}-${row}`}>
                    <rect
                      x={x} y={y} width={CELL_W} height={CELL_H}
                      fill={fill} stroke="rgba(26, 26, 46, 0.2)" strokeWidth={1} rx={4}
                    />
                    <text
                      x={x + CELL_W / 2} y={y + CELL_H / 2 - 6}
                      textAnchor="middle" fontSize="13" fill="#1a1a2e"
                      fontFamily='"Noto Serif JP", serif'
                    >
                      ({col},{row})
                    </text>
                    {isNumbered && (
                      <text
                        x={x + CELL_W / 2} y={y + CELL_H / 2 + 14}
                        textAnchor="middle" fontSize="16" fontWeight="bold" fill="#e94560"
                        fontFamily='"Noto Serif JP", serif'
                      >
                        {idx}
                      </text>
                    )}
                  </g>
                );
              })
            )}

            {/* 右端 dots 列 */}
            {Array.from({ length: GRID_SIZE }, (_, row) => {
              const x = PAD_LEFT + GRID_SIZE * CELL_W;
              const y = PAD_TOP + row * CELL_H;
              return (
                <g key={`dots-col-${row}`}>
                  <rect x={x} y={y} width={EXTRA} height={CELL_H}
                    fill="none" stroke="rgba(26, 26, 46, 0.1)" strokeWidth={1} strokeDasharray="4 3" rx={4} />
                  <text x={x + EXTRA / 2} y={y + CELL_H / 2 + 4} textAnchor="middle"
                    fontSize="18" fill="rgba(26, 26, 46, 0.35)" fontFamily='"Noto Serif JP", serif'>…</text>
                </g>
              );
            })}

            {/* 下端 dots 行 */}
            {Array.from({ length: GRID_SIZE }, (_, col) => {
              const x = PAD_LEFT + col * CELL_W;
              const y = PAD_TOP + GRID_SIZE * CELL_H;
              return (
                <g key={`dots-row-${col}`}>
                  <rect x={x} y={y} width={CELL_W} height={EXTRA}
                    fill="none" stroke="rgba(26, 26, 46, 0.1)" strokeWidth={1} strokeDasharray="4 3" rx={4} />
                  <text x={x + CELL_W / 2} y={y + EXTRA / 2 + 4} textAnchor="middle"
                    fontSize="18" fill="rgba(26, 26, 46, 0.35)" fontFamily='"Noto Serif JP", serif'>⋮</text>
                </g>
              );
            })}

            {/* 右下角 ⋱ */}
            <rect
              x={PAD_LEFT + GRID_SIZE * CELL_W} y={PAD_TOP + GRID_SIZE * CELL_H}
              width={EXTRA} height={EXTRA}
              fill="none" stroke="rgba(26, 26, 46, 0.1)" strokeWidth={1} strokeDasharray="4 3" rx={4}
            />
            <text
              x={PAD_LEFT + GRID_SIZE * CELL_W + EXTRA / 2}
              y={PAD_TOP + GRID_SIZE * CELL_H + EXTRA / 2 + 6}
              textAnchor="middle" fontSize="20" fill="rgba(26, 26, 46, 0.35)"
              fontFamily='"Noto Serif JP", serif'
            >⋱</text>

            {/* 矢印 */}
            {flatOrder.slice(0, Math.max(0, shownCount - 1)).map((from, i) => {
              const to = flatOrder[i + 1];
              if (!to) return null;
              const f = cellCenter(from.x, from.y);
              const t = cellCenter(to.x, to.y);
              const dx = t.cx - f.cx;
              const dy = t.cy - f.cy;
              const len = Math.sqrt(dx * dx + dy * dy);
              const shrink = 18;
              return (
                <line
                  key={`arrow-${i}`}
                  x1={f.cx + (dx / len) * shrink} y1={f.cy + (dy / len) * shrink}
                  x2={t.cx - (dx / len) * shrink} y2={t.cy - (dy / len) * shrink}
                  stroke="#e94560" strokeWidth={1.5} markerEnd="url(#arrowhead)" opacity={0.6}
                />
              );
            })}
          </svg>
        );
      }}
    </Stepper>
  );
}
