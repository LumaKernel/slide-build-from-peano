import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  FlexBox,
} from "spectacle";
import { BlockMath } from "../components/Math.tsx";
import { LegendCard } from "../components/LegendCard.tsx";

export function S05BasicPredicates(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">作ってみよう: 基礎的な述語</Heading>
        <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "8px" }}>
          <Appear>
            <LegendCard title="比較">
              <div style={{ fontSize: "18px" }}>
                <BlockMath>{String.raw`a < b \iff \exists n.\, a + n + 1 = b`}</BlockMath>
              </div>
              <Text fontSize="14px" color="gray" style={{ margin: 0 }}>
                注記: 厳密には ∃n. (a + n) + 1 = b のように2変数関数とみなすが、結合律によりこの書き方をする
              </Text>
            </LegendCard>
          </Appear>
          <Appear>
            <LegendCard title="偶数">
              <div style={{ fontSize: "18px" }}>
                <BlockMath>{String.raw`\text{even}(n) \iff \exists x.\, x + x = n`}</BlockMath>
              </div>
            </LegendCard>
          </Appear>
        </FlexBox>
        <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "20px" }}>
          <Appear>
            <LegendCard title="倍数">
              <div style={{ fontSize: "18px" }}>
                <BlockMath>{String.raw`m \mid n \iff \exists x.\, n = m \times x`}</BlockMath>
              </div>
            </LegendCard>
          </Appear>
          <Appear>
            <LegendCard title="素数">
              <div style={{ fontSize: "16px" }}>
                <BlockMath>{String.raw`\text{prime}(n) \iff 1 < n \wedge \forall d.\, (1 < d \wedge d < n \rightarrow \neg(d \mid n))`}</BlockMath>
              </div>
              <Text fontSize="16px" style={{ margin: 0 }}>これって許されるの？ → 展開できるよね</Text>
            </LegendCard>
          </Appear>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading fontSize="h2">素数の展開形</Heading>
        <Text>
          すべてを展開すると、こうなる:
        </Text>
        <Text fontSize="18px">
          <BlockMath>{String.raw`(\exists \mathit{e}_{1} . \mathbf{n} = 1 + \mathit{e}_{1} + 1) \wedge (\forall \mathit{d}_{1} . (((\exists \mathit{e}_{2} . 1 + \mathit{e}_{2} + 1 = \mathit{d}_{1}) \wedge (\exists \mathit{e}_{3} . \mathit{d}_{1} + \mathit{e}_{3} + 1 = \mathbf{n})) \rightarrow (\neg \exists \mathit{d}_{2} . \mathit{d}_{1} \times \mathit{d}_{2} = \mathbf{n})))`}</BlockMath>
        </Text>
      </Slide>
    </>
  );
}
