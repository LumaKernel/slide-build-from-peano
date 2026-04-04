import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  CodeSpan,
} from "spectacle";
import { InlineMath } from "../components/Math.tsx";
import { CantorZigzag } from "../components/CantorZigzag.tsx";
import { CantorPairingGrid } from "../components/CantorPairingGrid.tsx";

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
        <Text style={{ margin: "0 0 4px 0" }}>
          全単射が存在する — ジグザグに番号を振っていく（<InlineMath>{String.raw`|\mathbb{N}| = |\mathbb{Q}|`}</InlineMath> とほぼ同じ議論）
        </Text>
        <CantorZigzag />
      </Slide>

      <Slide>
        <Heading fontSize="h2">カントールのペアリング関数</Heading>
        <CantorPairingGrid />
      </Slide>
    </>
  );
}
