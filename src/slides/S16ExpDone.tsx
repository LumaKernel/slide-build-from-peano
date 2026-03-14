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
          <Text fontSize="20px" color="gray">
            （展開したら巨大な論理式になる — ここでは省略）
          </Text>
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
