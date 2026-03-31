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

export function S18Incompleteness(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">この先: 不完全性定理</Heading>
        <Appear>
          <Text fontSize="20px" style={{ margin: "0 0 4px 0" }}>まずは証明論を少し</Text>
        </Appear>
        <Appear>
          <Text fontSize="20px" style={{ margin: "0 0 8px 0" }}>
            <InlineMath>{String.raw`\vdash \varphi`}</InlineMath> かつ{" "}
            <InlineMath>{String.raw`\vdash \neg\varphi`}</InlineMath>{" "}
            なる論理式 <InlineMath>{String.raw`\varphi`}</InlineMath> が構成できる… とすると
          </Text>
        </Appear>
        <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "4px" }}>
          <Appear>
            <LegendCard title="表現力">
              <Text fontSize="16px" style={{ margin: "0 0 4px 0" }}>自然数で構造とその間の論理関係（プログラム）が記述できる</Text>
              <Text fontSize="14px" color="gray" style={{ margin: 0 }}>
                例: <InlineMath>{String.raw`\mathbb{Z}`}</InlineMath> や{" "}
                <InlineMath>{String.raw`\mathbb{Q}`}</InlineMath>{" "}
                の議論がペアと同値類で記述できてしまう
              </Text>
            </LegendCard>
          </Appear>
          <Appear>
            <LegendCard title="自己言及">
              <Text fontSize="16px" style={{ margin: "0 0 4px 0" }}>自然数論はとても単純な構造と検証ルールで構成される</Text>
              <Text fontSize="16px" fontWeight="bold" style={{ margin: "0 0 4px 0" }}>自然数論のなかで自然数論が扱える</Text>
              <Text fontSize="16px" style={{ margin: "0 0 4px 0" }}>対角化により、自己言及的な命題が作れる（簡単ではない）</Text>
              <Text fontSize="16px" fontWeight="bold" color="yellow" style={{ margin: 0 }}>
                自己を否定するかのような命題が作れる
              </Text>
            </LegendCard>
          </Appear>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading fontSize="h2">この先: 不完全性定理</Heading>
        <Appear>
          <Text fontSize="22px">
            いずれにしても{" "}
            <InlineMath>{String.raw`\vdash \varphi \wedge \neg\varphi`}</InlineMath>{" "}
            となる（矛盾）
          </Text>
        </Appear>
        <Appear>
          <Text fontSize="22px" fontWeight="bold">
            無矛盾な体系において、証明も反証もできない論理式が存在する
          </Text>
        </Appear>
        <Appear>
          <Text fontSize="20px">
            完全とは: 任意の <InlineMath>{String.raw`\varphi`}</InlineMath> について{" "}
            <InlineMath>{String.raw`\vdash \varphi`}</InlineMath> か{" "}
            <InlineMath>{String.raw`\vdash \neg\varphi`}</InlineMath> となるもの
          </Text>
        </Appear>
        <Appear>
          <Text fontSize="18px" color="gray">
            注意: 任意の <InlineMath>{String.raw`\varphi`}</InlineMath> について{" "}
            <InlineMath>{String.raw`\vdash \varphi \vee \neg\varphi`}</InlineMath>{" "}
            ではない。これは排中律といって、古典論理においては成立する
          </Text>
        </Appear>
        <Appear>
          <Text fontSize="22px" fontWeight="bold" color="yellow">
            どちらかが成り立つのは分かっているのに、どちらが成り立つかを示すことは決して叶わない → 構成主義にも繋がる
          </Text>
        </Appear>
      </Slide>
    </>
  );
}
