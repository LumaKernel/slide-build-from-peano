import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  UnorderedList,
  ListItem,
} from "spectacle";
import { InlineMath } from "../components/Math.tsx";

export function S13ListMotivation(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">リストを作りたい</Heading>
        <Text>可変個の数を一個の数に埋め込むには？</Text>
        <Appear>
          <Text fontWeight="bold">ゲーデル数というものがある</Text>
          <UnorderedList>
            <ListItem>
              <Text fontSize="24px">
                <InlineMath>{String.raw`p_1^{e_1} \times p_2^{e_2} \times \cdots \times p_k^{e_k}`}</InlineMath>{" "}
                とすれば <InlineMath>k</InlineMath> 個のデータを埋め込める
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="24px">
                ある素数について、その指数部を取る、というのが（まだ）できない
              </Text>
            </ListItem>
          </UnorderedList>
        </Appear>
        <Appear>
          <Text fontWeight="bold" color="red">→ うまくいかない</Text>
        </Appear>
      </Slide>

      <Slide>
        <Heading fontSize="h2">リストを作りたい: 剰余を使う</Heading>
        <Text>数の羅列を一個の数から復元するには…</Text>
        <Appear>
          <UnorderedList>
            <ListItem>
              <Text fontSize="24px">
                大きな数を作って、剰余を色々とることで個別の数を取り出せる
              </Text>
            </ListItem>
          </UnorderedList>
        </Appear>
        <Appear>
          <UnorderedList>
            <ListItem>
              <Text fontSize="24px">
                中国剰余定理により、互いに素な mod を利用すれば、それらの値を埋め込める
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="24px">
                mod はすべて素数としてしまおう
              </Text>
            </ListItem>
          </UnorderedList>
        </Appear>
        <Appear>
          <UnorderedList>
            <ListItem>
              <Text fontSize="24px">
                各数には上限がある → 上限付きの数列しか作れない、といまのところはしておこう
              </Text>
            </ListItem>
          </UnorderedList>
        </Appear>
      </Slide>
    </>
  );
}
