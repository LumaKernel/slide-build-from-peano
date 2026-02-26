import { type ReactNode } from "react";
import { Slide, Heading, Text, FlexBox } from "spectacle";

export function TitleSlide(): ReactNode {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="center">
        <Heading>Build from Peano</Heading>
        <Text>Peano 算術から始める数理論理学</Text>
      </FlexBox>
    </Slide>
  );
}
