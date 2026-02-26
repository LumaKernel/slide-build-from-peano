import { type ReactNode } from "react";
import { Slide, Heading, FlexBox, Text } from "spectacle";
import { ProofTree, type ProofNode } from "../components/ProofTree.tsx";

const simpleImplication: ProofNode = {
  kind: "inference",
  premises: [
    { kind: "formula", tex: "A", discharge: true },
  ],
  conclusion: "A \\to A",
  ruleLabel: "\\to\\!I",
};

const nestedProof: ProofNode = {
  kind: "inference",
  premises: [
    {
      kind: "inference",
      premises: [
        { kind: "formula", tex: "A \\to B", discharge: true },
        {
          kind: "inference",
          premises: [
            { kind: "formula", tex: "A", discharge: true },
          ],
          conclusion: "B",
          ruleLabel: "\\to\\!E",
        },
      ],
      conclusion: "B",
      ruleLabel: "\\to\\!E",
    },
  ],
  conclusion: "(A \\to B) \\to A \\to B",
  ruleLabel: "\\to\\!I",
};

export function ProofTreeDemoSlide(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">自然演繹 推論図</Heading>
      <FlexBox justifyContent="center" marginTop={24}>
        <ProofTree root={simpleImplication} />
      </FlexBox>
      <Text fontSize="text" textAlign="center">
        {"\\(\\to\\)-Introduction"}
      </Text>
      <FlexBox justifyContent="center" marginTop={32}>
        <ProofTree root={nestedProof} />
      </FlexBox>
    </Slide>
  );
}
