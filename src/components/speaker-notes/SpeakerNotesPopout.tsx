import { type ReactNode, useState, useCallback, useEffect, useRef } from "react";
import { useSlideSync } from "./useSlideSync.ts";
import type { SlideSyncMessage } from "./types.ts";
import "./SpeakerNotes.css";

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

export function SpeakerNotesPopout({
  notes,
}: {
  readonly notes: readonly string[];
}): ReactNode {
  const [slideIndex, setSlideIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleMessage = useCallback((msg: SlideSyncMessage) => {
    if (msg.type === "slideChange") {
      setSlideIndex(msg.slideIndex);
    }
  }, []);

  const { send } = useSlideSync(handleMessage);

  useEffect(() => {
    send({ type: "requestSync" });
  }, [send]);

  // Stopwatch
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } else if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current != null) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const note = notes[slideIndex] ?? "";

  return (
    <div className="speaker-notes-popout">
      <div className="speaker-notes-popout-header">
        <div className="speaker-notes-popout-info">
          <span className="speaker-notes-popout-slide-num">
            スライド {slideIndex + 1} / {notes.length}
          </span>
        </div>
        <div className="speaker-notes-popout-controls">
          <button
            className="speaker-notes-nav-btn"
            onClick={() => send({ type: "navigate", direction: "prev" })}
            disabled={slideIndex <= 0}
            type="button"
          >
            ◀ 前
          </button>
          <button
            className="speaker-notes-nav-btn"
            onClick={() => send({ type: "navigate", direction: "next" })}
            disabled={slideIndex >= notes.length - 1}
            type="button"
          >
            次 ▶
          </button>
        </div>
        <div className="speaker-notes-stopwatch">
          <span className="speaker-notes-time">{formatTime(elapsed)}</span>
          <button
            className="speaker-notes-timer-btn"
            onClick={() => setIsRunning((prev) => !prev)}
            type="button"
          >
            {isRunning ? "⏸" : "▶"}
          </button>
          <button
            className="speaker-notes-timer-btn"
            onClick={() => {
              setIsRunning(false);
              setElapsed(0);
            }}
            type="button"
          >
            ↺
          </button>
        </div>
      </div>
      <div className="speaker-notes-popout-content">
        {note.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}
