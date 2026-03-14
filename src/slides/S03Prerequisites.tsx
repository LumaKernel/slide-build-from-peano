import { type ReactNode } from "react";
import {
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "spectacle";

export function S03Prerequisites(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">前提知識</Heading>
      <UnorderedList>
        <ListItem>
          <Text>中国剰余定理（CRT）</Text>
        </ListItem>
        <ListItem>
          <Text>束縛変数と自由変数</Text>
        </ListItem>
        <ListItem>
          <Text>述語と関数</Text>
        </ListItem>
      </UnorderedList>
      <Text fontSize="20px" color="gray">
        ※ わからないものがあっても、ぜひ調べながら読んでみてほしい
      </Text>
    </Slide>
  );
}
