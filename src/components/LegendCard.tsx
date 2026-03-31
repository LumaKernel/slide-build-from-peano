import { type ReactNode } from "react";

export function LegendCard({
  title,
  children,
}: {
  readonly title: ReactNode;
  readonly children: ReactNode;
}): ReactNode {
  return (
    <div
      style={{
        position: "relative",
        flex: "1 1 0",
        minWidth: 0,
        borderRadius: "10px",
        padding: "28px 16px 12px",
        background:
          "linear-gradient(135deg, rgba(15, 52, 96, 0.06) 0%, rgba(233, 69, 96, 0.04) 100%)",
        border: "1px solid rgba(15, 52, 96, 0.15)",
        boxShadow: "0 2px 8px rgba(26, 26, 46, 0.06)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-11px",
          left: "14px",
          padding: "0 8px",
          background: "#f5f5f5",
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: '"Noto Serif JP", serif',
          color: "#1a1a2e",
          lineHeight: "22px",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
