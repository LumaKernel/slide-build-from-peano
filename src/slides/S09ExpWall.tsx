import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  CodeSpan,
} from "spectacle";
import { InlineMath } from "../components/Math.tsx";

export function S09ExpWall(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">指数関数の壁</Heading>
      <Text style={{ margin: "0 0 4px 0" }}>指数関数を作るのは、なぜ難しいのか</Text>
      <Appear>
        <Text style={{ margin: 0 }}>
          かけ算を繰り返し適用する。ただしその回数は可変。
        </Text>
        <Text style={{ margin: 0 }}>
          <InlineMath>{String.raw`1,\; a,\; a \times a,\; a \times a \times a,\; \ldots`}</InlineMath>
        </Text>
      </Appear>
      <Appear>
        <div style={{ background: "#1e1e1e", borderRadius: "8px", padding: "10px 20px", margin: "8px 0" }}>
          <Text color="white" fontFamily="monospace" fontSize="20px" style={{ whiteSpace: "pre", lineHeight: 1.5, margin: 0 }}>
            <CodeSpan fontSize="20px">{"let x = 1"}</CodeSpan>{"\n"}
            <CodeSpan fontSize="20px">{"for i in 0..n:"}</CodeSpan>{"\n"}
            <CodeSpan fontSize="20px">{"    x *= a"}</CodeSpan>{"\n"}
            <CodeSpan fontSize="20px">{"return x"}</CodeSpan>
          </Text>
        </div>
      </Appear>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", marginTop: "8px", fontFamily: '"Noto Serif JP", serif', fontSize: "36px", fontWeight: "bold", color: "#e94560" }}>
        <Appear>
          <span>ループが書けない…</span>
        </Appear>
        <Appear>
          <span>まだ。</span>
        </Appear>
      </div>
    </Slide>
  );
}
