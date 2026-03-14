import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Appear,
} from "spectacle";

export function S04WhatsMissing(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">ここに無いものってなんだろう</Heading>
        <Appear>
          <Text fontWeight="bold">基本的な述語がまずない</Text>
          <UnorderedList>
            <ListItem><Text>比較 n &lt; m</Text></ListItem>
            <ListItem><Text>nは偶数</Text></ListItem>
            <ListItem><Text>nはmの倍数</Text></ListItem>
            <ListItem><Text>nは素数</Text></ListItem>
            <ListItem><Text>nは完全数</Text></ListItem>
          </UnorderedList>
        </Appear>
        <Appear>
          <Text fontWeight="bold">演算（関数）も色々ない</Text>
          <UnorderedList>
            <ListItem><Text>引き算、割り算</Text></ListItem>
            <ListItem><Text>累乗、階乗</Text></ListItem>
            <ListItem><Text>n番目の素数</Text></ListItem>
            <ListItem><Text>整数論の諸関数: 約数関数、オイラーのtotient関数、メビウス関数、素数計数関数</Text></ListItem>
            <ListItem><Text>巨大数論の諸関数: テトレーション、アッカーマン関数</Text></ListItem>
          </UnorderedList>
        </Appear>
      </Slide>

      <Slide>
        <Heading fontSize="h2">無いものについて考える</Heading>
        <Text fontWeight="bold">述語とは</Text>
        <Text>0個以上の（固定の数の）自然数について、真偽が決まるもの</Text>
        <UnorderedList>
          <Appear>
            <ListItem><Text>1以上の自然数である: 1変数述語</Text></ListItem>
          </Appear>
          <Appear>
            <ListItem><Text>3または5の倍数である: 1変数述語</Text></ListItem>
          </Appear>
          <Appear>
            <ListItem><Text>平方数である: 1変数述語</Text></ListItem>
          </Appear>
          <Appear>
            <ListItem><Text>互いに素である: 2変数述語</Text></ListItem>
          </Appear>
          <Appear>
            <ListItem><Text>aとbはnを法として合同か: 3変数述語</Text></ListItem>
          </Appear>
          <Appear>
            <ListItem><Text>ピタゴラスの三つ組か: 3変数述語</Text></ListItem>
          </Appear>
        </UnorderedList>
        <Appear>
          <Text fontSize="20px" color="gray">
            負の数とか扱えないのか？ 分数や多項式、実数は？ 順序数とかは？
          </Text>
        </Appear>
      </Slide>
    </>
  );
}
