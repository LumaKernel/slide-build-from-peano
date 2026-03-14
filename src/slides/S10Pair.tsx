import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  CodeSpan,
} from "spectacle";
import { InlineMath, BlockMath } from "../components/Math.tsx";

export function S10Pair(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">構造を埋め込む: ペア（二つ組）</Heading>
        <Text>
          ペアとは <InlineMath>{String.raw`(n, m)`}</InlineMath> で、ふたつがその順で等しいとき、等しいペアとみなすもの
        </Text>
        <Text fontWeight="bold">各種言語での表現</Text>
        <Text>
          C: <CodeSpan>{"pair<int,int>"}</CodeSpan>{"　"}
          Go: <CodeSpan>{"(int,int)"}</CodeSpan>{"　"}
          Rust: <CodeSpan>{"(i32,i32)"}</CodeSpan>{"　"}
          TS: <CodeSpan>{"[number,number]"}</CodeSpan>{"　"}
          Haskell: <CodeSpan>{"(Int,Int)"}</CodeSpan>
        </Text>
      </Slide>

      <Slide>
        <Heading fontSize="h2">ペアと自然数は等濃</Heading>
        <Text>全単射が存在する</Text>
        <div style={{ fontFamily: "monospace", fontSize: "18px", lineHeight: 1.8, margin: "8px 0", textAlign: "center" }}>
          <Text fontSize="18px" fontFamily="monospace">
            {"(0,0) (0,1) (0,2) (0,3) ..."}{"\n"}
            {"(1,0) (1,1) (1,2) (1,3) ..."}{"\n"}
            {"(2,0) (2,1) (2,2) (2,3) ..."}{"\n"}
            {"(3,0) (3,1) (3,2) (3,3) ..."}
          </Text>
        </div>
        <Text>
          ジグザグに番号を振っていく。
          <InlineMath>{String.raw`|\mathbb{N}| = |\mathbb{Q}|`}</InlineMath> とほぼ同じ議論。
        </Text>
      </Slide>

      <Slide>
        <Heading fontSize="h2">カントールのペアリング関数</Heading>
        <Text>Cantor's pairing function</Text>
        <BlockMath>{String.raw`f(x, y) := \frac{(x + y)(x + y + 1) + 2y}{2}`}</BlockMath>
      </Slide>
    </>
  );
}
