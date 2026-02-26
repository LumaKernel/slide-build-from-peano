import { type ReactNode } from "react";
import { Deck, DefaultTemplate } from "spectacle";
import { theme } from "./theme.ts";
import { TitleSlide } from "./slides/TitleSlide.tsx";
import { MathDemoSlide } from "./slides/MathDemoSlide.tsx";
import { ProofTreeDemoSlide } from "./slides/ProofTreeDemoSlide.tsx";

export function App(): ReactNode {
  return (
    <Deck theme={theme} template={<DefaultTemplate />}>
      <TitleSlide />
      <MathDemoSlide />
      <ProofTreeDemoSlide />
    </Deck>
  );
}
