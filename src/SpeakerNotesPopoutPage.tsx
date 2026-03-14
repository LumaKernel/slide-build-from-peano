import { type ReactNode } from "react";
import { SpeakerNotesPopout } from "./components/speaker-notes/index.ts";
import { speakerNotes } from "./speakerNotes.ts";

export function SpeakerNotesPopoutPage(): ReactNode {
  return <SpeakerNotesPopout notes={speakerNotes} />;
}
