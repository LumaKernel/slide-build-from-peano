import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  FlexBox,
} from "spectacle";
import { InlineMath, BlockMath } from "../components/Math.tsx";
import { LegendCard } from "../components/LegendCard.tsx";

export function S19Limits(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">この先: この体系が書ける関数の強さの限界</Heading>
      <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "8px" }}>
        <Appear>
          <LegendCard title="限界">
            <Text fontSize="16px" style={{ margin: "0 0 4px 0" }}>
              ペアノ算術で表現可能な関数は原始再帰関数を含むが、すべての計算可能関数ではない
            </Text>
            <Text fontSize="16px" style={{ margin: "0 0 4px 0" }}>証明不能だと分かっている命題の例も存在する</Text>
            <Text fontSize="16px" fontWeight="bold" style={{ margin: "0 0 2px 0" }}>
              順序数解析: 証明論的順序数は <InlineMath>{String.raw`\varepsilon_0`}</InlineMath>
            </Text>
            <div style={{ fontSize: "18px", margin: "0 0 2px 0" }}>
              <BlockMath>{String.raw`\varepsilon_0 = \omega^{\omega^{\omega^{\cdot^{\cdot^{\cdot}}}}}`}</BlockMath>
            </div>
            <Text fontSize="14px" color="gray" style={{ margin: 0 }}>
              超限帰納法で <InlineMath>{String.raw`\varepsilon_0`}</InlineMath>{" "}
              までの帰納法は証明できるが、
              <InlineMath>{String.raw`\varepsilon_0`}</InlineMath>{" "}
              自身での帰納法は証明できない
            </Text>
          </LegendCard>
        </Appear>
        <Appear>
          <LegendCard title="参考文献">
            <Text fontSize="16px" style={{ margin: "0 0 4px 0" }}>数理論理学の基礎テキスト</Text>
            <Text fontSize="16px" style={{ margin: "0 0 4px 0" }}>ゲーデルの不完全性定理関連</Text>
            <Text fontSize="16px" style={{ margin: 0 }}>順序数解析、証明論</Text>
          </LegendCard>
        </Appear>
      </FlexBox>
    </Slide>
  );
}
