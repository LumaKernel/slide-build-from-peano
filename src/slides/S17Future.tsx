import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  FlexBox,
} from "spectacle";
import { LegendCard } from "../components/LegendCard.tsx";

export function S17Future(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">この先</Heading>
      <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "8px" }}>
        <Appear>
          <LegendCard title="基礎理論">
            <Text fontSize="18px" style={{ margin: "0 0 4px 0" }}>より簡潔な上限付きリスト表現</Text>
            <Text fontSize="14px" color="gray" style={{ margin: "0 0 4px 0" }}>　上記の方法はるま（発表者）が自分で発見した</Text>
            <Text fontSize="14px" color="gray" style={{ margin: "0 0 8px 0" }}>　ゲーデルのβ関数（より標準的な方法）</Text>
            <Text fontSize="18px" style={{ margin: "0 0 4px 0" }}>ゲーデルの不完全性定理</Text>
            <Text fontSize="18px" style={{ margin: 0 }}>計算理論、巨大数論</Text>
          </LegendCard>
        </Appear>
        <Appear>
          <LegendCard title="発展トピック">
            <Text fontSize="18px" style={{ margin: "0 0 4px 0" }}>数学基礎論、記号論理学、証明論、型理論</Text>
            <Text fontSize="18px" style={{ margin: "0 0 4px 0" }}>集合論、証明論的順序数（順序数解析）</Text>
            <Text fontSize="18px" style={{ margin: "0 0 8px 0" }}>カリー・ハワード対応</Text>
            <Text fontSize="18px" fontWeight="bold" color="yellow" style={{ margin: 0 }}>
              未解決問題: フェルマーの最終定理は証明できるのか in PA
            </Text>
          </LegendCard>
        </Appear>
      </FlexBox>
    </Slide>
  );
}
