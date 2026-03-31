import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  UnorderedList,
  ListItem,
} from "spectacle";
import { BlockMath } from "../components/Math.tsx";
import { fermatExpandedUnicode } from "../formulas/fermatExpanded.ts";

export function S16ExpDone(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">累乗ができたので</Heading>
        <Appear>
          <Text fontWeight="bold">フェルマーの最終定理が表現できる</Text>
        </Appear>
        <Appear>
          <BlockMath>{String.raw`\forall n.\, n > 2 \to \forall a\, b\, c.\, \neg(a^n + b^n = c^n)`}</BlockMath>
        </Appear>
        <Appear>
          <Text fontWeight="bold" fontSize="18px" style={{ margin: "0 0 4px 0" }}>展開した論理式（{fermatExpandedUnicode.length.toLocaleString()} 文字）:</Text>
          <div style={{ overflowY: "auto", maxHeight: "220px", maxWidth: "100%", border: "1px solid rgba(15, 52, 96, 0.15)", borderRadius: "8px", padding: "8px 12px", background: "rgba(15, 52, 96, 0.03)" }}>
            <p style={{ fontFamily: '"Noto Serif JP", "STIX Two Math", serif', fontSize: "9px", wordBreak: "break-all", lineHeight: 1.8, margin: 0, color: "#1a1a2e" }}>
              {fermatExpandedUnicode}
            </p>
          </div>
        </Appear>
      </Slide>

      <Slide>
        <Heading fontSize="h2">リスト表現の改善</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              <Text fontSize="24px">
                リスト表現を素因数分解にできる → 上限を気にする必要がなくなる
              </Text>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Text fontSize="24px">
                ただし、有限列は上限を持つので、上記の方法を使えば条件を満たすリストを取ってくることはできる
              </Text>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
    </>
  );
}
