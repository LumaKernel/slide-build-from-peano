import { type ReactNode } from "react";
import { Deck, DefaultTemplate } from "spectacle";
import { theme } from "./theme.ts";
import { SpeakerNotesPanel } from "./components/speaker-notes/index.ts";
import { speakerNotes } from "./speakerNotes.ts";
import { S01Title } from "./slides/S01Title.tsx";
import { S02Tools } from "./slides/S02Tools.tsx";
import { S03Prerequisites } from "./slides/S03Prerequisites.tsx";
import { S04WhatsMissing } from "./slides/S04WhatsMissing.tsx";
import { S05BasicPredicates } from "./slides/S05BasicPredicates.tsx";
import { S06Functions } from "./slides/S06Functions.tsx";
import { S07LetIn } from "./slides/S07LetIn.tsx";
import { S08BasicFunctions } from "./slides/S08BasicFunctions.tsx";
import { S09ExpWall } from "./slides/S09ExpWall.tsx";
import { S10Pair } from "./slides/S10Pair.tsx";
import { S11PairMake } from "./slides/S11PairMake.tsx";
import { S12PairGet } from "./slides/S12PairGet.tsx";
import { S13ListMotivation } from "./slides/S13ListMotivation.tsx";
import { S14ListDefine } from "./slides/S14ListDefine.tsx";
import { S15ExpCalc } from "./slides/S15ExpCalc.tsx";
import { S16ExpDone } from "./slides/S16ExpDone.tsx";
import { S17Future } from "./slides/S17Future.tsx";
import { S18Incompleteness } from "./slides/S18Incompleteness.tsx";
import { S19Limits } from "./slides/S19Limits.tsx";

export function App(): ReactNode {
  return (
    <>
      <Deck theme={theme} template={<DefaultTemplate />}>
        <S01Title />
        <S02Tools />
        <S03Prerequisites />
        <S04WhatsMissing />
        <S05BasicPredicates />
        <S06Functions />
        <S07LetIn />
        <S08BasicFunctions />
        <S09ExpWall />
        <S10Pair />
        <S11PairMake />
        <S12PairGet />
        <S13ListMotivation />
        <S14ListDefine />
        <S15ExpCalc />
        <S16ExpDone />
        <S17Future />
        <S18Incompleteness />
        <S19Limits />
      </Deck>
      <SpeakerNotesPanel notes={speakerNotes} />
    </>
  );
}
