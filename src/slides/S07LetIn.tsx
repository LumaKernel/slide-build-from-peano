import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
} from "spectacle";
import { InlineMath, BlockMath } from "../components/Math.tsx";

export function S07LetIn(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">寄り道: 変数定義できる（let in）</Heading>
      <Appear>
        <Text fontWeight="bold">剰余の例</Text>
        <Text>
          <InlineMath>{String.raw`a \mathbin{\%} n + b \mathbin{\%} n = (a + b) \mathbin{\%} n`}</InlineMath>
          {"　or　"}
          <InlineMath>{String.raw`a \mathbin{\%} n + b \mathbin{\%} n = n + (a + b) \mathbin{\%} n`}</InlineMath>
        </Text>
      </Appear>
      <Appear>
        <Text>
          <InlineMath>{String.raw`u := a \mathbin{\%} n + b \mathbin{\%} n`}</InlineMath>
          {"、"}
          <InlineMath>{String.raw`v := (a + b) \mathbin{\%} n`}</InlineMath>
          {" とおけば "}
          <InlineMath>{String.raw`u = v`}</InlineMath>
          {" or "}
          <InlineMath>{String.raw`u = n + v`}</InlineMath>
          {" と書ける"}
        </Text>
      </Appear>
      <Appear>
        <Text fontWeight="bold">これを論理式でやる</Text>
        <BlockMath>{String.raw`\forall u.\, u = a \mathbin{\%} n + b \mathbin{\%} n \to \forall v.\, v = (a + b) \mathbin{\%} n \to (u = v \lor u = n + v)`}</BlockMath>
      </Appear>
      <Appear>
        <Text>
          <InlineMath>{String.raw`\forall x.\, x = \ldots \to \varphi`}</InlineMath>
          {" は let in のように使える"}
        </Text>
      </Appear>
    </Slide>
  );
}
