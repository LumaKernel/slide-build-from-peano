import { useEffect, useRef, useCallback } from "react";
import { CHANNEL_NAME, type SlideSyncMessage } from "./types.ts";

export function useSlideSync(
  onMessage: (msg: SlideSyncMessage) => void,
): {
  readonly send: (msg: SlideSyncMessage) => void;
} {
  const channelRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    const ch = new BroadcastChannel(CHANNEL_NAME);
    channelRef.current = ch;
    ch.onmessage = (ev: MessageEvent<SlideSyncMessage>) => {
      onMessage(ev.data);
    };
    return () => {
      ch.close();
      channelRef.current = null;
    };
  }, [onMessage]);

  const send = useCallback((msg: SlideSyncMessage) => {
    channelRef.current?.postMessage(msg);
  }, []);

  return { send };
}
