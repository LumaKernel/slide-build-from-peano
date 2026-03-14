import { type ReactNode } from "react";
import { Slide, Heading, Text, FlexBox } from "spectacle";

export function S01Title(): ReactNode {
  return (
    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading>+と×でなにつくろう</Heading>
        <Text fontSize="28px">ペアノ算術の論理式で遊ぶ</Text>
      </FlexBox>
    </Slide>
  );
}
