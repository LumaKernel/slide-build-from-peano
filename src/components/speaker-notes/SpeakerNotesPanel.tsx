import { type ReactNode, useState, useCallback, useEffect } from "react";
import { useSlideSync } from "./useSlideSync.ts";
import type { SlideSyncMessage } from "./types.ts";
import "./SpeakerNotes.css";

function useSlideIndexFromUrl(): number {
  const [slideIndex, setSlideIndex] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("slideIndex") ?? 0);
  });

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setSlideIndex(Number(params.get("slideIndex") ?? 0));
    };
    window.addEventListener("popstate", handlePopState);

    // Spectacle uses replaceState which doesn't fire popstate
    const interval = setInterval(() => {
      const params = new URLSearchParams(window.location.search);
      const idx = Number(params.get("slideIndex") ?? 0);
      setSlideIndex((prev) => (prev !== idx ? idx : prev));
    }, 200);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      clearInterval(interval);
    };
  }, []);

  return slideIndex;
}

export function SpeakerNotesPanel({
  notes,
}: {
  readonly notes: readonly string[];
}): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const slideIndex = useSlideIndexFromUrl();

  const handleMessage = useCallback((msg: SlideSyncMessage) => {
    if (msg.type === "navigate") {
      // Spectacle listens for ArrowLeft/ArrowRight on the document
      const key = msg.direction === "next" ? "ArrowRight" : "ArrowLeft";
      document.dispatchEvent(new KeyboardEvent("keydown", { key }));
    }
  }, []);

  const { send } = useSlideSync(handleMessage);

  useEffect(() => {
    send({ type: "slideChange", slideIndex });
  }, [slideIndex, send]);

  const note = notes[slideIndex] ?? "";

  const handlePopout = useCallback(() => {
    const url = `${window.location.origin}${window.location.pathname}#/speaker-notes`;
    window.open(url, "speaker-notes", "width=700,height=500,menubar=no,toolbar=no");
  }, []);

  return (
    <>
      <button
        className="speaker-notes-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        title="スピーカーノート"
        type="button"
      >
        💬
      </button>
      {isOpen && (
        <div className="speaker-notes-panel">
          <div className="speaker-notes-header">
            <span className="speaker-notes-title">
              スピーカーノート（{slideIndex + 1} / {notes.length}）
            </span>
            <button
              className="speaker-notes-popout-btn"
              onClick={handlePopout}
              title="別タブで開く"
              type="button"
            >
              ↗
            </button>
          </div>
          <div className="speaker-notes-content">
            {note.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
