import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
} from "spectacle";
import { InlineMath, BlockMath } from "../components/Math.tsx";

export function S14ListDefine(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">リストを定義</Heading>
      <Text fontSize="20px" style={{ margin: "0 0 4px 0" }}>
        <InlineMath>{String.raw`(0, a_0),\; (1, a_1),\; \ldots,\; (k{-}1, a_{k-1})`}</InlineMath>{" "}
        を含み、かつ関数であり（左が決まると右が一意に決まり）、左として{" "}
        <InlineMath>k</InlineMath> 以上のものを含まないものを長さ{" "}
        <InlineMath>k</InlineMath> のリストとする
      </Text>
      <Text fontSize="18px" color="gray" style={{ margin: "0 0 4px 0" }}>
        これが <InlineMath>k</InlineMath> に関する述語にできるという感覚
      </Text>

      <Appear>
        <Text fontWeight="bold" fontSize="20px" style={{ margin: "0 0 2px 0" }}>含む条件:</Text>
        <div style={{ fontSize: "18px", margin: "0 0 4px 0" }}>
          <BlockMath>{String.raw`\forall i.\, 0 \leq i < k \to \exists p.\, \text{prime}(p) \wedge \text{get}_0(l \bmod p) = i`}</BlockMath>
        </div>
      </Appear>

      <Appear>
        <Text fontSize="18px" style={{ margin: "0 0 2px 0" }}><span style={{ fontWeight: "bold" }}>関数である条件:</span> 同じ左に対して右が一意に決まる</Text>
        <Text fontSize="18px" style={{ margin: 0 }}><span style={{ fontWeight: "bold" }}>左として <InlineMath>k</InlineMath> 以上を含まない:</span> 範囲制限</Text>
      </Appear>
    </Slide>
  );
}
