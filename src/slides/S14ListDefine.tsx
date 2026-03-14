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
      <Text fontSize="22px">
        <InlineMath>{String.raw`(0, a_0),\; (1, a_1),\; \ldots,\; (k{-}1, a_{k-1})`}</InlineMath>{" "}
        を含み、かつ関数であり（左が決まると右が一意に決まり）、左として{" "}
        <InlineMath>k</InlineMath> 以上のものを含まないものを長さ{" "}
        <InlineMath>k</InlineMath> のリストとする
      </Text>
      <Text fontSize="20px" color="gray">
        これが <InlineMath>k</InlineMath> に関する述語にできるという感覚
      </Text>

      <Appear>
        <Text fontWeight="bold" fontSize="22px">含む条件:</Text>
        <BlockMath>{String.raw`\forall i.\, 0 \leq i < k \to \exists p.\, \text{prime}(p) \land \text{get}_0(l \bmod p) = i`}</BlockMath>
      </Appear>

      <Appear>
        <Text fontWeight="bold" fontSize="22px">関数である条件:</Text>
        <Text fontSize="20px">同じ左に対して右が一意に決まる</Text>
      </Appear>

      <Appear>
        <Text fontWeight="bold" fontSize="22px">左として <InlineMath>k</InlineMath> 以上を含まない:</Text>
        <Text fontSize="20px">範囲制限</Text>
      </Appear>
    </Slide>
  );
}
