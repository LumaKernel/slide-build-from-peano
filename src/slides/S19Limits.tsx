import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  UnorderedList,
  ListItem,
} from "spectacle";
import { InlineMath, BlockMath } from "../components/Math.tsx";

export function S19Limits(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">この先: この体系が書ける関数の強さの限界</Heading>

      <Appear>
        <Text fontSize="22px">
          ペアノ算術で表現可能な関数は原始再帰関数を含むが、すべての計算可能関数ではない
        </Text>
      </Appear>

      <Appear>
        <Text fontSize="22px">証明不能だと分かっている命題の例も存在する</Text>
      </Appear>

      <Appear>
        <Text fontSize="22px" fontWeight="bold">
          順序数解析: ペアノ算術の証明論的順序数は{" "}
          <InlineMath>{String.raw`\varepsilon_0`}</InlineMath>
        </Text>
        <BlockMath>{String.raw`\varepsilon_0 = \omega^{\omega^{\omega^{\cdot^{\cdot^{\cdot}}}}}`}</BlockMath>
      </Appear>

      <Appear>
        <Text fontSize="20px">
          超限帰納法で <InlineMath>{String.raw`\varepsilon_0`}</InlineMath>{" "}
          までの帰納法は証明できるが、
          <InlineMath>{String.raw`\varepsilon_0`}</InlineMath>{" "}
          自身での帰納法は証明できない
        </Text>
      </Appear>

      <Appear>
        <Text fontWeight="bold" fontSize="22px">参考文献</Text>
        <UnorderedList>
          <ListItem>
            <Text fontSize="18px">数理論理学の基礎テキスト</Text>
          </ListItem>
          <ListItem>
            <Text fontSize="18px">ゲーデルの不完全性定理関連</Text>
          </ListItem>
          <ListItem>
            <Text fontSize="18px">順序数解析、証明論</Text>
          </ListItem>
        </UnorderedList>
      </Appear>
    </Slide>
  );
}
