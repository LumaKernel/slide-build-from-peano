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
import { LegendCard } from "../components/LegendCard.tsx";

export function S04WhatsMissing(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">ここに無いものってなんだろう</Heading>
        <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "8px" }}>
          <Appear>
            <LegendCard title="基本的な述語がまずない">
              <UnorderedList style={{ margin: 0, padding: "0 0 0 20px" }}>
                <ListItem style={{ margin: 0 }}><Text fontSize="20px" style={{ margin: 0 }}>比較 n &lt; m</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="20px" style={{ margin: 0 }}>nは偶数</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="20px" style={{ margin: 0 }}>nはmの倍数</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="20px" style={{ margin: 0 }}>nは素数</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="20px" style={{ margin: 0 }}>nは完全数</Text></ListItem>
              </UnorderedList>
            </LegendCard>
          </Appear>
          <Appear>
            <LegendCard title="演算（関数）も色々ない">
              <UnorderedList style={{ margin: 0, padding: "0 0 0 20px" }}>
                <ListItem style={{ margin: 0 }}><Text fontSize="20px" style={{ margin: 0 }}>引き算、割り算</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="20px" style={{ margin: 0 }}>累乗、階乗</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="20px" style={{ margin: 0 }}>n番目の素数</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="20px" style={{ margin: 0 }}>約数関数、オイラーのtotient関数、メビウス関数、…</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="20px" style={{ margin: 0 }}>テトレーション、アッカーマン関数、…</Text></ListItem>
              </UnorderedList>
            </LegendCard>
          </Appear>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading fontSize="h2">無いものについて考える</Heading>
        <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "8px" }}>
          <Appear>
            <LegendCard title="述語とは">
              <Text fontSize="20px" style={{ margin: 0 }}>0個以上の（固定の数の）自然数について、真偽が決まるもの</Text>
            </LegendCard>
          </Appear>
          <Appear>
            <LegendCard title="例">
              <UnorderedList style={{ margin: 0, padding: "0 0 0 20px" }}>
                <ListItem style={{ margin: 0 }}><Text fontSize="18px" style={{ margin: 0 }}>1以上の自然数である: 1変数述語</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="18px" style={{ margin: 0 }}>3または5の倍数である: 1変数述語</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="18px" style={{ margin: 0 }}>平方数である: 1変数述語</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="18px" style={{ margin: 0 }}>互いに素である: 2変数述語</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="18px" style={{ margin: 0 }}>aとbはnを法として合同か: 3変数述語</Text></ListItem>
                <ListItem style={{ margin: 0 }}><Text fontSize="18px" style={{ margin: 0 }}>ピタゴラスの三つ組か: 3変数述語</Text></ListItem>
              </UnorderedList>
            </LegendCard>
          </Appear>
        </FlexBox>
        <Appear>
          <Text fontSize="18px" color="gray" style={{ margin: "8px 0 0 0" }}>
            負の数とか扱えないのか？ 分数や多項式、実数は？ 順序数とかは？
          </Text>
        </Appear>
      </Slide>
    </>
  );
}
