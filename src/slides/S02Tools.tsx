import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  FlexBox,
} from "spectacle";
import { InlineMath } from "../components/Math.tsx";
import { LegendCard } from "../components/LegendCard.tsx";

export function S02Tools(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">使えるもの</Heading>
      <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "8px" }}>
        <Appear>
          <LegendCard title="論理">
            <Text fontSize="18px" style={{ margin: "0 0 4px 0" }}>
              基礎的な論理の組み立て: <InlineMath>{String.raw`\wedge, \vee, \implies, \iff, \lnot`}</InlineMath>
            </Text>
            <Text fontSize="18px" style={{ margin: 0 }}>
              量化子: <InlineMath>{String.raw`\forall, \exists`}</InlineMath>
            </Text>
          </LegendCard>
        </Appear>
        <Appear>
          <LegendCard title="演算">
            <Text fontSize="18px" style={{ margin: 0 }}>
              <InlineMath>{String.raw`+, \times`}</InlineMath> — いつもの足し算、かけ算
            </Text>
          </LegendCard>
        </Appear>
      </FlexBox>
      <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "20px" }}>
        <Appear>
          <LegendCard title="数と変数">
            <Text fontSize="18px" style={{ margin: "0 0 4px 0" }}>
              自然数すべて: <InlineMath>{String.raw`0, 1, 2, \ldots`}</InlineMath>
            </Text>
            <Text fontSize="18px" style={{ margin: 0 }}>
              自然数を表わす変数: <InlineMath>{String.raw`a, b, c, x, y, z, \ldots`}</InlineMath>
            </Text>
          </LegendCard>
        </Appear>
        <Appear>
          <LegendCard title="等号">
            <Text fontSize="18px" style={{ margin: 0 }}>
              等号 <InlineMath>=</InlineMath> — 不等号{" "}
              <InlineMath>{String.raw`a \neq b`}</InlineMath> は{" "}
              <InlineMath>{String.raw`\lnot(a = b)`}</InlineMath> の糖衣構文
            </Text>
          </LegendCard>
        </Appear>
      </FlexBox>
    </Slide>
  );
}
