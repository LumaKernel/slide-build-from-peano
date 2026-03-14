import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
} from "spectacle";
import { InlineMath, BlockMath } from "../components/Math.tsx";

export function S11PairMake(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">ペアを作る関数</Heading>
        <Text>
          <InlineMath>{String.raw`f(x, y) := \frac{(x + y)(x + y + 1) + 2y}{2}`}</InlineMath>
        </Text>
        <Appear>
          <Text>
            これでよいだろうか？ → 割り算が使えない → <InlineMath>{String.raw`\exists!`}</InlineMath> の方法を取ろう
          </Text>
        </Appear>
        <Appear>
          <BlockMath>{String.raw`\exists! n.\, 2n = (x + y)(x + y + 1) + 2y`}</BlockMath>
          <Text>これでOK</Text>
        </Appear>
      </Slide>

      <Slide>
        <Heading fontSize="h2">ペアの等価性を表現する</Heading>
        <Text>
          <InlineMath>{String.raw`(a, b) = (c, d) \Rightarrow a = c \wedge b = d`}</InlineMath> を表現してみよう
        </Text>
        <Appear>
          <Text fontWeight="bold">展開した論理式</Text>
          <div style={{ overflowX: "auto", maxWidth: "100%" }}>
            <Text fontSize="12px" style={{ wordBreak: "break-all", lineHeight: 1.8 }}>
              <InlineMath>{String.raw`\forall \mathit{a}_{1} . \forall \mathit{b}_{1} . \forall \mathit{c}_{1} . \forall \mathit{d}_{1} . ((\forall \mathit{n}_{1} . ((2 \times \mathit{n}_{1} = (\mathit{c}_{1} + \mathit{d}_{1}) \times (\mathit{c}_{1} + \mathit{d}_{1} + 1) + 2 \times \mathit{d}_{1}) \rightarrow (\forall \mathit{n}_{2} . ((2 \times \mathit{n}_{2} = (\mathit{a}_{1} + \mathit{b}_{1}) \times (\mathit{a}_{1} + \mathit{b}_{1} + 1) + 2 \times \mathit{b}_{1}) \rightarrow (\mathit{n}_{2} = \mathit{n}_{1}))))) \rightarrow ((\mathit{a}_{1} = \mathit{c}_{1}) \wedge (\mathit{b}_{1} = \mathit{d}_{1})))`}</InlineMath>
            </Text>
          </div>
        </Appear>
      </Slide>
    </>
  );
}
