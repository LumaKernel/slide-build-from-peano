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

export function S02Tools(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">使えるもの</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            <Text>
              基礎的な論理の組み立て:{" "}
              <InlineMath>{String.raw`\wedge, \vee, \implies, \iff, \lnot`}</InlineMath>
            </Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>
              量化子: <InlineMath>{String.raw`\forall, \exists`}</InlineMath>
            </Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>
              <InlineMath>{String.raw`+, \times`}</InlineMath> — いつもの足し算、かけ算
            </Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>
              自然数すべて: <InlineMath>{String.raw`0, 1, 2, \ldots`}</InlineMath>
            </Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>
              自然数を表わす変数: <InlineMath>{String.raw`a, b, c, x, y, z, \ldots`}</InlineMath>
            </Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>
              等号 <InlineMath>=</InlineMath> — 不等号{" "}
              <InlineMath>{String.raw`a \neq b`}</InlineMath> は{" "}
              <InlineMath>{String.raw`\lnot(a = b)`}</InlineMath> の糖衣構文
            </Text>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}
