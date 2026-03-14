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

export function S05BasicPredicates(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">作ってみよう: 基礎的な述語</Heading>
        <Appear>
          <BlockMath>{String.raw`a < b \iff \exists n.\, a + n + 1 = b`}</BlockMath>
          <Text fontSize="18px" color="gray">
            注記: 厳密には <code>∃n. (a + n) + 1 = b</code> のように2変数関数とみなすが、結合律によりこの書き方をする
          </Text>
        </Appear>
        <Appear>
          <BlockMath>{String.raw`\text{even}(n) \iff \exists x.\, x + x = n`}</BlockMath>
        </Appear>
        <Appear>
          <BlockMath>{String.raw`m \mid n \iff \exists x.\, n = m \times x`}</BlockMath>
        </Appear>
        <Appear>
          <BlockMath>{String.raw`\text{prime}(n) \iff 1 < n \wedge \forall d.\, (1 < d \wedge d < n \rightarrow \neg(d \mid n))`}</BlockMath>
          <UnorderedList>
            <ListItem>
              <Text fontSize="20px">これって許されるの？ → 展開できるよね</Text>
            </ListItem>
          </UnorderedList>
        </Appear>
      </Slide>

      <Slide>
        <Heading fontSize="h2">素数の展開形</Heading>
        <Text>
          すべてを展開すると、こうなる:
        </Text>
        <Text fontSize="18px">
          <BlockMath>{String.raw`(\exists \mathit{e}_{1} . \mathbf{n} = 1 + \mathit{e}_{1} + 1) \wedge (\forall \mathit{d}_{1} . (((\exists \mathit{e}_{2} . 1 + \mathit{e}_{2} + 1 = \mathit{d}_{1}) \wedge (\exists \mathit{e}_{3} . \mathit{d}_{1} + \mathit{e}_{3} + 1 = \mathbf{n})) \rightarrow (\neg \exists \mathit{d}_{2} . \mathit{d}_{1} \times \mathit{d}_{2} = \mathbf{n})))`}</BlockMath>
        </Text>
      </Slide>
    </>
  );
}
