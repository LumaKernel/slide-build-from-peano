import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { SpeakerNotesPopoutPage } from "./SpeakerNotesPopoutPage.tsx";

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error("Root element not found");
}

const isPopout = window.location.hash === "#/speaker-notes";

createRoot(rootElement).render(
  <StrictMode>
    {isPopout ? <SpeakerNotesPopoutPage /> : <App />}
  </StrictMode>,
);
