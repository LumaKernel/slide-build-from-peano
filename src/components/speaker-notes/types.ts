export type SlideSyncMessage =
  | { readonly type: "slideChange"; readonly slideIndex: number }
  | { readonly type: "navigate"; readonly direction: "prev" | "next" }
  | { readonly type: "requestSync" };

export const CHANNEL_NAME = "speaker-notes-sync";
