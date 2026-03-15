import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  UnorderedList,
  ListItem,
} from "spectacle";
import { BlockMath, InlineMath } from "../components/Math.tsx";

export function S06Functions(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">そもそも関数を作るってなに</Heading>
        <Appear>
          <Text>引き算を例にとる</Text>
        </Appear>
        <Appear>
          <Text>
            引き算の結果がただひとつに定まるなにかとして、存在量化で取れればいい
          </Text>
        </Appear>
        <Appear>
          <Text>
            <InlineMath>{String.raw`n \mathbin{\dot{-}} m`}</InlineMath>（ドットマイナス）を考える
          </Text>
        </Appear>
        <Appear>
          <BlockMath>{String.raw`\exists! x.\, n = x + m \vee (\exists y.\, n + y + 1 = m \wedge x = 0)`}</BlockMath>
        </Appear>
        <Appear>
          <Text>
            <InlineMath>n</InlineMath> と <InlineMath>m</InlineMath> を定めれば、ただひとつの{" "}
            <InlineMath>x</InlineMath> が定まる
          </Text>
        </Appear>
      </Slide>

      <Slide>
        <Heading fontSize="h2">
          <InlineMath>{String.raw`n \mathbin{\dot{-}} n = 0`}</InlineMath> を表現してみよう
        </Heading>
        <Text>展開するとこうなる:</Text>
        <Text fontSize="18px">
          <BlockMath>{String.raw`\forall \mathit{x}_{1} . (((\mathbf{n} = \mathit{x}_{1} + \mathbf{n}) \vee ((\exists \mathit{y}_{1} . \mathbf{n} + \mathit{y}_{1} + 1 = \mathbf{n}) \wedge (\mathit{x}_{1} = 0))) \rightarrow (\mathit{x}_{1} = 0))`}</BlockMath>
        </Text>
        <Appear>
          <Text fontWeight="bold">なにが起こった？</Text>
          <UnorderedList>
            <ListItem>
              <Text>
                <InlineMath>{String.raw`\exists! x.\, P(x)`}</InlineMath> を{" "}
                <InlineMath>{String.raw`\forall x.\, P(x) \rightarrow x = 0`}</InlineMath> に変換した
              </Text>
            </ListItem>
          </UnorderedList>
        </Appear>
      </Slide>
    </>
  );
}
