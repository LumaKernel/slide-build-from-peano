import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Appear,
  FlexBox,
  Box,
} from "spectacle";

export function S04WhatsMissing(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">ここに無いものってなんだろう</Heading>
        <FlexBox alignItems="flex-start" justifyContent="center" flexWrap="wrap">
          <Appear>
            <Box width="45%" minWidth="360px" padding="0 16px">
              <Text fontWeight="bold" fontSize="22px">基本的な述語がまずない</Text>
              <UnorderedList fontSize="18px">
                <ListItem><Text fontSize="18px">比較 n &lt; m</Text></ListItem>
                <ListItem><Text fontSize="18px">nは偶数</Text></ListItem>
                <ListItem><Text fontSize="18px">nはmの倍数</Text></ListItem>
                <ListItem><Text fontSize="18px">nは素数</Text></ListItem>
                <ListItem><Text fontSize="18px">nは完全数</Text></ListItem>
              </UnorderedList>
            </Box>
          </Appear>
          <Appear>
            <Box width="45%" minWidth="360px" padding="0 16px">
              <Text fontWeight="bold" fontSize="22px">演算（関数）も色々ない</Text>
              <UnorderedList fontSize="18px">
                <ListItem><Text fontSize="18px">引き算、割り算</Text></ListItem>
                <ListItem><Text fontSize="18px">累乗、階乗</Text></ListItem>
                <ListItem><Text fontSize="18px">n番目の素数</Text></ListItem>
                <ListItem><Text fontSize="18px">約数関数、オイラーのtotient関数、メビウス関数、…</Text></ListItem>
                <ListItem><Text fontSize="18px">テトレーション、アッカーマン関数、…</Text></ListItem>
              </UnorderedList>
            </Box>
          </Appear>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading fontSize="h2">無いものについて考える</Heading>
        <Appear>
          <Text><Text fontWeight="bold" style={{ display: "inline" }}>述語</Text>とは — 0個以上の（固定の数の）自然数について、真偽が決まるもの</Text>
        </Appear>
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
