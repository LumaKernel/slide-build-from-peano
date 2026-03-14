import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  Appear,
  UnorderedList,
  ListItem,
} from "spectacle";

export function S17Future(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">この先</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            <Text fontSize="22px">より簡潔な上限付きリスト表現</Text>
            <UnorderedList>
              <ListItem>
                <Text fontSize="18px">上記の方法はるま（発表者）が自分で発見した</Text>
              </ListItem>
              <ListItem>
                <Text fontSize="18px">ゲーデルのβ関数（より標準的な方法）</Text>
              </ListItem>
            </UnorderedList>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text fontSize="22px">ゲーデルの不完全性定理</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text fontSize="22px">計算理論、巨大数論</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text fontSize="22px">数学基礎論、記号論理学、証明論、型理論</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text fontSize="22px">集合論、証明論的順序数（順序数解析）</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text fontSize="22px">カリー・ハワード対応</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text fontSize="22px" color="yellow">
              未解決問題: フェルマーの最終定理は証明できるのか in PA
            </Text>
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
  );
}
