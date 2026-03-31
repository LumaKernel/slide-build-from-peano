import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Appear,
  FlexBox,
} from "spectacle";
import { InlineMath } from "../components/Math.tsx";
import { LegendCard } from "../components/LegendCard.tsx";

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
        <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "8px" }}>
          <Appear>
            <LegendCard title="割り算: 商と剰余で考える">
              <Text fontSize="18px" style={{ margin: 0 }}>
                商: <InlineMath>{String.raw`\exists! q.\, \exists r.\, n = m \times q + r`}</InlineMath>
              </Text>
              <Text fontSize="18px" style={{ margin: 0 }}>
                剰余: <InlineMath>{String.raw`\exists! r.\, \exists q.\, n = m \times q + r`}</InlineMath>
              </Text>
            </LegendCard>
          </Appear>
          <Appear>
            <LegendCard title={<><InlineMath>{String.raw`p`}</InlineMath>（素数）の累乗</>}>
              <Text fontSize="18px" style={{ margin: 0 }}>
                <InlineMath>{String.raw`n`}</InlineMath> は <InlineMath>{String.raw`m`}</InlineMath> の累乗の述語を作ることに帰着される
              </Text>
            </LegendCard>
          </Appear>
        </FlexBox>
        <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "20px" }}>
          <Appear>
            <LegendCard title={<><InlineMath>{String.raw`a`}</InlineMath> の <InlineMath>{String.raw`n`}</InlineMath> 乗</>}>
              <Text fontSize="18px" style={{ margin: 0 }}>同様に難しそう</Text>
            </LegendCard>
          </Appear>
          <Appear>
            <LegendCard title={<><InlineMath>{String.raw`n`}</InlineMath> より大きい次の素数</>}>
              <Text fontSize="18px" style={{ margin: 0 }}>
                <InlineMath>{String.raw`\exists! p.\, (p > n) \wedge \text{prime}(p) \wedge \forall q.\, (n < q < p \to \lnot\text{prime}(q))`}</InlineMath>
              </Text>
            </LegendCard>
          </Appear>
        </FlexBox>
      </Slide>
    </>
  );
}
