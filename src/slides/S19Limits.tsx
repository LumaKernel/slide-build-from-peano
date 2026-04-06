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
          <LegendCard title="表現可能性 (Representability)">
            <Text fontSize="15px" style={{ margin: "0 0 2px 0" }}>
              PAは<strong>すべての計算可能関数</strong>を表現できる（逆も成立: 表現可能 = 計算可能）
            </Text>
            <Text fontSize="13px" color="gray" style={{ margin: "0 0 2px 0", paddingLeft: "12px" }}>
              任意の計算可能関数 <InlineMath>f</InlineMath> に対し、PA の論理式{" "}
              <InlineMath>{String.raw`\varphi(x, y)`}</InlineMath> が存在して:
            </Text>
            <div style={{ fontSize: "14px", margin: "0 0 0 0", paddingLeft: "12px" }}>
              <BlockMath>{String.raw`\text{PA} \vdash \varphi(\overline{n},\, \overline{f(n)}) \;\;\text{かつ}\;\; \text{PA} \vdash \forall y\,(\varphi(\overline{n}, y) \to y = \overline{f(n)})`}</BlockMath>
            </div>
            <Text fontSize="13px" color="gray" style={{ margin: 0, paddingLeft: "12px" }}>
              計算不可能な関数（例: ビジービーバー <InlineMath>{String.raw`\text{BB}(n)`}</InlineMath>）は表現不能
            </Text>
          </LegendCard>
        </Appear>
        <Appear>
          <LegendCard title="証明可能全域性 (Provably Total)">
            <Text fontSize="15px" style={{ margin: "0 0 2px 0" }}>
              PAが <InlineMath>{String.raw`\forall x\, \exists!\, y\;\; \varphi(x, y)`}</InlineMath> を証明できる関数には<strong>限界</strong>がある
            </Text>
            <Text fontSize="13px" color="gray" style={{ margin: "0 0 2px 0", paddingLeft: "12px" }}>
              証明可能全域的な関数 ={" "}
              <InlineMath>{String.raw`\varepsilon_0`}</InlineMath> 未満の順序数上の原始再帰関数
            </Text>
            <Text fontSize="13px" color="gray" style={{ margin: "0 0 2px 0", paddingLeft: "12px" }}>
              例: 階乗、フィボナッチ、アッカーマン関数 → 証明可能全域的
            </Text>
            <Text fontSize="13px" color="gray" style={{ margin: 0, paddingLeft: "12px" }}>
              例: グッドスタイン数列の長さ → 表現可能だが全域性をPA内で証明不能
            </Text>
          </LegendCard>
        </Appear>
      </FlexBox>
      <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "10px" }}>
        <Appear>
          <LegendCard title="順序数解析">
            <Text fontSize="14px" style={{ margin: "0 0 2px 0" }}>
              PAの証明論的順序数: <InlineMath>{String.raw`\varepsilon_0 = \omega^{\omega^{\omega^{\cdot^{\cdot^{\cdot}}}}}`}</InlineMath>
            </Text>
            <Text fontSize="13px" color="gray" style={{ margin: 0 }}>
              <InlineMath>{String.raw`\varepsilon_0`}</InlineMath>{" "}
              までの超限帰納法は証明できるが、
              <InlineMath>{String.raw`\varepsilon_0`}</InlineMath>{" "}
              自身での帰納法は証明できない
            </Text>
          </LegendCard>
        </Appear>
      </FlexBox>
    </Slide>
  );
}
