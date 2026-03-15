import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  FlexBox,
  Box,
  UnorderedList,
  ListItem,
} from "spectacle";
import { BlockMath } from "../components/Math.tsx";

function Row({ label, formula, children }: { readonly label: string; readonly formula: string; readonly children?: ReactNode }): ReactNode {
  return (
    <FlexBox alignItems="center" justifyContent="flex-start" width="100%">
      <Box width="20%" flexShrink={0}>
        <Text fontSize="22px" fontWeight="bold" margin="0">{label}</Text>
      </Box>
      <Box width="80%">
        <BlockMath>{formula}</BlockMath>
        {children}
      </Box>
    </FlexBox>
  );
}

export function S05BasicPredicates(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">作ってみよう: 基礎的な述語</Heading>
        <Appear>
          <Row label="比較" formula={String.raw`a < b \iff \exists n.\, a + n + 1 = b`}>
            <Text fontSize="16px" color="gray" margin="0">
              注記: 厳密には ∃n. (a + n) + 1 = b のように2変数関数とみなすが、結合律によりこの書き方をする
            </Text>
          </Row>
        </Appear>
        <Appear>
          <Row label="偶数" formula={String.raw`\text{even}(n) \iff \exists x.\, x + x = n`} />
        </Appear>
        <Appear>
          <Row label="倍数" formula={String.raw`m \mid n \iff \exists x.\, n = m \times x`} />
        </Appear>
        <Appear>
          <Row label="素数" formula={String.raw`\text{prime}(n) \iff 1 < n \wedge \forall d.\, (1 < d \wedge d < n \rightarrow \neg(d \mid n))`}>
            <UnorderedList>
              <ListItem>
                <Text fontSize="20px">これって許されるの？ → 展開できるよね</Text>
              </ListItem>
            </UnorderedList>
          </Row>
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
