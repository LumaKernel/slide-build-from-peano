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
      <Text>指数関数を作るのは、なぜ難しいのか</Text>
      <Appear>
        <Text>
          かけ算を繰り返し適用する。ただしその回数は可変。
        </Text>
        <Text>
          <InlineMath>{String.raw`1,\; a,\; a \times a,\; a \times a \times a,\; \ldots`}</InlineMath>
        </Text>
      </Appear>
      <Appear>
        <div style={{ background: "#1e1e1e", borderRadius: "8px", padding: "16px 24px", margin: "16px 0" }}>
          <Text color="white" fontFamily="monospace" fontSize="20px" style={{ whiteSpace: "pre", lineHeight: 1.6 }}>
            <CodeSpan fontSize="20px">{"let x = 1"}</CodeSpan>{"\n"}
            <CodeSpan fontSize="20px">{"for i in 0..n:"}</CodeSpan>{"\n"}
            <CodeSpan fontSize="20px">{"    x *= a"}</CodeSpan>{"\n"}
            <CodeSpan fontSize="20px">{"return x"}</CodeSpan>
          </Text>
        </div>
      </Appear>
      <Appear>
        <Text fontWeight="bold" color="red" fontSize="36px">
          ループが書けない。まだ。
        </Text>
      </Appear>
    </Slide>
  );
}
