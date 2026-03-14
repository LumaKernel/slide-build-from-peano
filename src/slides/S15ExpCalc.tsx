import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
} from "spectacle";
import { InlineMath, BlockMath } from "../components/Math.tsx";

export function S15ExpCalc(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">累乗を計算する</Heading>
      <Text>
        <InlineMath>{String.raw`a_i \times a = a_{i+1}`}</InlineMath>{" "}
        という条件を付ければ、累乗が入ったリストを取れる
      </Text>

      <Appear>
        <Text fontWeight="bold">漸化式条件:</Text>
        <BlockMath>{String.raw`a_{i+1} = a_i \times a`}</BlockMath>
        <Text fontSize="20px" color="gray">
          初項 <InlineMath>{String.raw`a_0 = 1`}</InlineMath> のもとで、
          <InlineMath>{String.raw`a_k = a^k`}</InlineMath> となる
        </Text>
      </Appear>

      <Appear>
        <Text fontWeight="bold">
          <InlineMath>k</InlineMath> 番目を取り出す
        </Text>
        <Text>
          最後に、<InlineMath>k</InlineMath> 番目の値の右側を取り出せば累乗{" "}
          <InlineMath>{String.raw`a^k`}</InlineMath> が取れる
        </Text>
      </Appear>
    </Slide>
  );
}
