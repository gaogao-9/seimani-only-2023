"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Flex, keyframes } from "@chakra-ui/react";
import { Card } from "@/components/Card";

const TextFadeIn = keyframes`
  0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const animationStartDelay = 0.6;

const StyledCardSection = styled(Card.Section)<{ delay: number }>`
  animation: 0.5s ease calc(${({ delay }) => delay}s + ${animationStartDelay}s)
    1 running both ${TextFadeIn};
  transform-origin: center;
`;

const Page: React.FC = () => {
  const [transitionEnded, setTransitionEnded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.sessionStorage.setItem("navigationStatus", "navigationEnd");
    }, 100);
    setTimeout(() => {
      setTransitionEnded(true);
    }, 200);
  }, []);

  return (
    <>
      <Flex
        maxW="1200px"
        marginX="auto"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Card
          title={
            <Card.Title
              className={
                !transitionEnded ? "menuHeaderTransition event" : undefined
              }
            >
              イベント情報
            </Card.Title>
          }
        >
          <StyledCardSection delay={0} title="">
            ソクバイ海Ⅵの会場3大企画はこちら！
          </StyledCardSection>
          <StyledCardSection delay={0.1} title="色紙大募集">
            今回も全国の皆さんから色紙を募集します！
            <br />
            会場を政霊たちのイラストで華やかに飾りましょう！
            <br />
            募集条件や宛先は後日お知らせします。
          </StyledCardSection>
          <StyledCardSection delay={0.2} title="帰ってきた！会場限定グッズくじ">
            2020年に実施した会場限定グッズくじが帰ってくる……？
            <br />
            今回もハズレなし、1回500円を予定しています。
            <br />
            賞品は現在鋭意製作中！乞うご期待！
          </StyledCardSection>
          <StyledCardSection delay={0.3} title="アフターイベント">
            即売会パートの後に開催予定！
            <br />
            企画詳細は後日お知らせします。
          </StyledCardSection>
        </Card>
      </Flex>
    </>
  );
};

export default Page;
