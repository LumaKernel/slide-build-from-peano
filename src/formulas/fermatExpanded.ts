/**
 * フェルマーの最終定理をペアノ算術の原始的な言語（0, S, +, ×, =, ∀, ∃, ¬, ∧, ∨, →）に展開する。
 *
 * プレゼンで構築したエンコーディング:
 * 1. pair(x,y): ∃!n. 2×n = (x+y)×(x+y+1) + 2×y
 * 2. get₀(n) = x: ∃y. 2×n = (x+y)×(x+y+1) + 2×y
 * 3. get₁(n) = y: ∃x. 2×n = (x+y)×(x+y+1) + 2×y
 * 4. prime(p): p > 1 ∧ ∀d. (1 < d ∧ d < p → ¬∃q. d×q = p)
 * 5. list l of length k: エントリ (i, aᵢ) を素数 mod で埋め込み
 * 6. exp(a,k) = r: リストを使って漸化式で定義
 */

// 変数名の衝突を避けるためのカウンター
let varCounter = 0;
function freshVar(prefix: string): string {
  return `${prefix}_{${++varCounter}}`;
}

function resetVars(): void {
  varCounter = 0;
}

// ペアリング条件: 2×n = (x+y)×(x+y+1) + 2×y
function pairingEq(n: string, x: string, y: string): string {
  return `(2 \\times ${n} = (${x} + ${y}) \\times (${x} + ${y} + 1) + 2 \\times ${y})`;
}

// get₀(n) = x: ∃y. pairingEq(n, x, y)
function get0Eq(n: string, result: string): string {
  const y = freshVar("y");
  return `(\\exists ${y}.\\, ${pairingEq(n, result, y)})`;
}

// get₁(n) = y: ∃x. pairingEq(n, x, y)
function get1Eq(n: string, result: string): string {
  const x = freshVar("x");
  return `(\\exists ${x}.\\, ${pairingEq(n, x, result)})`;
}

// n > m: ∃k. n = m + S(k)
function gt(n: string, m: string): string {
  const k = freshVar("k");
  return `(\\exists ${k}.\\, ${n} = ${m} + S(${k}))`;
}


// n < m: m > n
function lt(n: string, m: string): string {
  return gt(m, n);
}

// prime(p): p > 1 ∧ ∀d. (d > 1 ∧ d < p → ¬∃q. d×q = p)
function isPrime(p: string): string {
  const d = freshVar("d");
  const q = freshVar("q");
  return `(${gt(p, "1")} \\wedge \\forall ${d}.\\, (${gt(d, "1")} \\wedge ${lt(d, p)} \\to \\neg (\\exists ${q}.\\, ${d} \\times ${q} = ${p})))`;
}

// リストの要素アクセス: l mod p のペアの get₀ = i かつ get₁ = v
// つまり ∃r. (r × p + ? = l のmod部分) ...
// mod を展開: l mod p = m  ⟺  ∃q. l = q × p + m ∧ m < p
function modEq(l: string, p: string, m: string): string {
  const q = freshVar("q");
  return `(\\exists ${q}.\\, ${l} = ${q} \\times ${p} + ${m} \\wedge ${lt(m, p)})`;
}

// リストエントリ: l の中に素数 p による要素 (i, v) がある
// ∃p ∃m. prime(p) ∧ l mod p = m ∧ get₀(m) = i ∧ get₁(m) = v
function listEntry(l: string, i: string, v: string): string {
  const p = freshVar("p");
  const m = freshVar("m");
  return `(\\exists ${p}.\\, \\exists ${m}.\\, ${isPrime(p)} \\wedge ${modEq(l, p, m)} \\wedge ${get0Eq(m, i)} \\wedge ${get1Eq(m, v)})`;
}

// リストの関数性: 同じ i に対する v が一意
// ∀p₁ ∀m₁ ∀p₂ ∀m₂ ∀i ∀v₁ ∀v₂.
//   (prime(p₁) ∧ l mod p₁ = m₁ ∧ get₀(m₁)=i ∧ get₁(m₁)=v₁ ∧
//    prime(p₂) ∧ l mod p₂ = m₂ ∧ get₀(m₂)=i ∧ get₁(m₂)=v₂)
//   → v₁ = v₂
function listFunctional(l: string): string {
  const p1 = freshVar("p");
  const m1 = freshVar("m");
  const p2 = freshVar("p");
  const m2 = freshVar("m");
  const i = freshVar("i");
  const v1 = freshVar("v");
  const v2 = freshVar("v");
  return `(\\forall ${p1}.\\, \\forall ${m1}.\\, \\forall ${p2}.\\, \\forall ${m2}.\\, \\forall ${i}.\\, \\forall ${v1}.\\, \\forall ${v2}.\\, ((${isPrime(p1)} \\wedge ${modEq(l, p1, m1)} \\wedge ${get0Eq(m1, i)} \\wedge ${get1Eq(m1, v1)} \\wedge ${isPrime(p2)} \\wedge ${modEq(l, p2, m2)} \\wedge ${get0Eq(m2, i)} \\wedge ${get1Eq(m2, v2)}) \\to ${v1} = ${v2}))`;
}

// リストの範囲: k 以上のインデックスを含まない
// ∀p ∀m ∀i. (prime(p) ∧ l mod p = m ∧ get₀(m) = i) → i < k
function listBounded(l: string, k: string): string {
  const p = freshVar("p");
  const m = freshVar("m");
  const i = freshVar("i");
  return `(\\forall ${p}.\\, \\forall ${m}.\\, \\forall ${i}.\\, (${isPrime(p)} \\wedge ${modEq(l, p, m)} \\wedge ${get0Eq(m, i)}) \\to ${lt(i, k)})`;
}

// リストの網羅: 0..k-1 の各 i について要素が存在
// ∀i. i < k → ∃v. listEntry(l, i, v)
function listComplete(l: string, k: string): string {
  const i = freshVar("i");
  const v = freshVar("v");
  return `(\\forall ${i}.\\, ${lt(i, k)} \\to (\\exists ${v}.\\, ${listEntry(l, i, v)}))`;
}

// exp(a, k) = r の展開:
// ∃l. isList(l, S(k))
//   ∧ listEntry(l, 0, 1)              -- 初項 = 1
//   ∧ ∀i. i < k → ∀vᵢ ∀vₛ. (listEntry(l, i, vᵢ) ∧ listEntry(l, S(i), vₛ)) → vₛ = vᵢ × a
//   ∧ listEntry(l, k, r)              -- k 番目 = r
function expEq(a: string, k: string, r: string): string {
  const l = freshVar("l");
  const sk = `S(${k})`;

  // isList(l, S(k)) = listComplete ∧ listFunctional ∧ listBounded
  const complete = listComplete(l, sk);
  const functional = listFunctional(l);
  const bounded = listBounded(l, sk);

  // 初項
  const initEntry = listEntry(l, "0", "1");

  // 漸化式
  const i2 = freshVar("i");
  const vi = freshVar("v");
  const vs = freshVar("v");
  const recurrence = `(\\forall ${i2}.\\, ${lt(i2, k)} \\to (\\forall ${vi}.\\, \\forall ${vs}.\\, (${listEntry(l, i2, vi)} \\wedge ${listEntry(l, `S(${i2})`, vs)}) \\to ${vs} = ${vi} \\times ${a}))`;

  // k番目
  const resultEntry = listEntry(l, k, r);

  return `(\\exists ${l}.\\, ${complete} \\wedge ${functional} \\wedge ${bounded} \\wedge ${initEntry} \\wedge ${recurrence} \\wedge ${resultEntry})`;
}

// フェルマーの最終定理の完全展開
export function generateFermatExpanded(): string {
  resetVars();

  const n = "n";
  const a = "a";
  const b = "b";
  const c = "c";

  // n > 2
  const nGt2 = gt(n, "S(S(0))");

  // a^n, b^n, c^n
  const r1 = freshVar("r");
  const r2 = freshVar("r");
  const r3 = freshVar("r");

  const expA = expEq(a, n, r1);
  const expB = expEq(b, n, r2);
  const expC = expEq(c, n, r3);

  // r1 + r2 = r3
  const sumEq = `${r1} + ${r2} = ${r3}`;

  const formula = `\\forall ${n}.\\, ${nGt2} \\to \\forall ${a}.\\, \\forall ${b}.\\, \\forall ${c}.\\, \\neg(\\exists ${r1}.\\, \\exists ${r2}.\\, \\exists ${r3}.\\, ${expA} \\wedge ${expB} \\wedge ${expC} \\wedge ${sumEq})`;

  return formula;
}

export const fermatExpandedLatex: string = generateFermatExpanded();

// LaTeX → Unicode 変換
function latexToUnicode(latex: string): string {
  return latex
    .replace(/\\forall\s*/g, "∀")
    .replace(/\\exists\s*/g, "∃")
    .replace(/\\neg\s*/g, "¬")
    .replace(/\\wedge\s*/g, "∧ ")
    .replace(/\\vee\s*/g, "∨ ")
    .replace(/\\to\s*/g, "→ ")
    .replace(/\\times\s*/g, "× ")
    .replace(/\\,\s*/g, " ")
    .replace(/\\\s/g, " ")
    .replace(/_\{(\d+)\}/g, (_, d: string) =>
      [...d].map((c) => "₀₁₂₃₄₅₆₇₈₉"[Number(c)] ?? c).join("")
    );
}

export const fermatExpandedUnicode: string = latexToUnicode(fermatExpandedLatex);
