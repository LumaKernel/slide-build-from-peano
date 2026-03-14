import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
} from "spectacle";
import { BlockMath } from "../components/Math.tsx";

export function S12PairGet(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">ペアから取り出す</Heading>
      <Text>
        ペアは数に変換された。逆に、ここからペアを構成している数を取り出すには？
      </Text>
      <BlockMath>{String.raw`\text{get}_0(n) := \exists! x.\, \exists y.\, 2n = (x+y)(x+y+1) + 2y`}</BlockMath>
      <BlockMath>{String.raw`\text{get}_1(n) := \exists! y.\, \exists x.\, 2n = (x+y)(x+y+1) + 2y`}</BlockMath>
      <Text fontSize="20px" color="gray">
        右側はペアを作る関数のときと完全に同じ
      </Text>
    </Slide>
  );
}
