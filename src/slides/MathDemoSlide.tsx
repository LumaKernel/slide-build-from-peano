import { type ReactNode } from "react";
import { Slide, Heading, Text, FlexBox } from "spectacle";
import { InlineMath, BlockMath } from "../components/Math.tsx";

export function MathDemoSlide(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">KaTeX 数式デモ</Heading>
      <Text>
        インライン数式: <InlineMath math="\forall x.\, P(x) \to Q(x)" />
      </Text>
      <FlexBox justifyContent="center" marginTop={32}>
        <BlockMath math="\cfrac{\Gamma \vdash A \quad \Gamma \vdash A \to B}{\Gamma \vdash B}\;\text{(MP)}" />
      </FlexBox>
      <Text>
        Peano の公理: <InlineMath math="\forall x.\, \lnot(S(x) = 0)" />
      </Text>
    </Slide>
  );
}
