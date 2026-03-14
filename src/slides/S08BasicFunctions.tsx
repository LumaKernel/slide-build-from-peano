import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Appear,
} from "spectacle";
import { InlineMath } from "../components/Math.tsx";

export function S08BasicFunctions(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">作ってみよう: 基礎的な関数</Heading>
        <UnorderedList>
          <ListItem><Text>割り算（商と剰余）</Text></ListItem>
          <ListItem>
            <Text>
              <InlineMath>{String.raw`p`}</InlineMath>（素数）の累乗
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <InlineMath>{String.raw`a`}</InlineMath> の <InlineMath>{String.raw`n`}</InlineMath> 乗
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <InlineMath>{String.raw`a`}</InlineMath> の累乗
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <InlineMath>{String.raw`n`}</InlineMath> より大きい次の素数
            </Text>
          </ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading fontSize="h2">基礎的な関数: 展開</Heading>
        <Appear>
          <Text fontWeight="bold">割り算: 商と剰余で考える</Text>
          <Text>
            商: <InlineMath>{String.raw`\exists! q.\, \exists r.\, n = m \times q + r`}</InlineMath>
          </Text>
          <Text>
            剰余: <InlineMath>{String.raw`\exists! r.\, \exists q.\, n = m \times q + r`}</InlineMath>
          </Text>
        </Appear>
        <Appear>
          <Text fontWeight="bold">
            <InlineMath>{String.raw`p`}</InlineMath>（素数）の累乗
          </Text>
          <Text>
            <InlineMath>{String.raw`n`}</InlineMath> は <InlineMath>{String.raw`m`}</InlineMath> の累乗の述語を作ることに帰着される
          </Text>
        </Appear>
        <Appear>
          <Text fontWeight="bold">
            <InlineMath>{String.raw`a`}</InlineMath> の <InlineMath>{String.raw`n`}</InlineMath> 乗
          </Text>
          <Text>同様に難しそう</Text>
        </Appear>
        <Appear>
          <Text fontWeight="bold">
            <InlineMath>{String.raw`n`}</InlineMath> より大きい次の素数
          </Text>
          <Text>
            <InlineMath>{String.raw`\exists! p.\, (p > n) \wedge \text{prime}(p) \wedge \forall q.\, (n < q < p \to \lnot\text{prime}(q))`}</InlineMath>
          </Text>
        </Appear>
      </Slide>
    </>
  );
}
