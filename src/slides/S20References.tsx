import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  FlexBox,
} from "spectacle";
import { LegendCard } from "../components/LegendCard.tsx";

export function S20References(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">参考文献</Heading>
      <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "8px" }}>
        <LegendCard title="数理論理学・ペアノ算術">
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            Hájek &amp; Pudlák, <em>Metamathematics of First-Order Arithmetic</em> (1993)
          </Text>
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            Kaye, <em>Models of Peano Arithmetic</em> (1991)
          </Text>
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            Enderton, <em>A Mathematical Introduction to Logic</em> (2001)
          </Text>
          <Text fontSize="13px" style={{ margin: 0 }}>
            戸田山和久『論理学をつくる』(2000)
          </Text>
        </LegendCard>
        <LegendCard title="不完全性定理">
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            Gödel, "Über formal unentscheidbare Sätze..." (1931)
          </Text>
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            Smith, <em>An Introduction to Gödel's Theorems</em> (2013)
          </Text>
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            菊池誠『不完全性定理』(2014, 共立出版)
          </Text>
          <Text fontSize="13px" style={{ margin: 0 }}>
            林晋・八杉満利子 訳・解説『ゲーデル 不完全性定理』(2006, 岩波文庫)
          </Text>
        </LegendCard>
      </FlexBox>
      <FlexBox alignItems="stretch" style={{ gap: "14px", width: "100%", marginTop: "10px" }}>
        <LegendCard title="証明論・順序数解析">
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            竹内外史『証明論入門』(原著: <em>Proof Theory</em>, 1987)
          </Text>
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            Pohlers, <em>Proof Theory: The First Step into Impredicativity</em> (2009)
          </Text>
          <Text fontSize="13px" style={{ margin: 0 }}>
            Rathjen, "The Art of Ordinal Analysis" (ICM 2006)
          </Text>
        </LegendCard>
        <LegendCard title="計算可能性・巨大数">
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            Cutland, <em>Computability</em> (1980)
          </Text>
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            Soare, <em>Recursively Enumerable Sets and Degrees</em> (1987)
          </Text>
          <Text fontSize="13px" style={{ margin: "0 0 3px 0" }}>
            Kirby &amp; Paris, "Accessible Independence Results for Peano Arithmetic" (1982)
          </Text>
          <Text fontSize="13px" style={{ margin: 0 }}>
            Aaronson, "The Busy Beaver Frontier" (2020)
          </Text>
        </LegendCard>
      </FlexBox>
    </Slide>
  );
}
