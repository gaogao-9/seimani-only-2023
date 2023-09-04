"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { AspectRatio, Flex, keyframes } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { AnchorLink } from "@/components/AnchorLink";

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
            <br />
            色紙応募条件
            <br />
            ・色紙に「2023/09/17 #アイムソウリー2023」と書く
            <br />
            ・政マニ関連の色紙である
            <br />
            ・色紙大きさ自由
            <br />
            ・モノクロ、カラーいずれも可
            <br />
            ・枚数制限なし
            <br />
            ・年齢制限イラストは不可
            <br />
            <br />
            ご注意とお願い
            <br />
            ・色紙は必ず透明OPP袋に入れてください
            <br />
            ・一般参加総理/当日来場できない総理は、事前にヤマト運輸の宅急便で発送してください
            <br />
            <AspectRatio maxW="80%" my={6} mx="auto" ratio={1092 / 616}>
              <AnchorLink href="/assets/img/event/invoice_kikaku.jpg">
                <Image
                  src="/assets/img/event/invoice_kikaku.jpg"
                  alt="色紙発送用伝票"
                  fill
                />
              </AnchorLink>
            </AspectRatio>
            ・サークル参加総理のみ、会場への直接持ち込みOKです。受付終了は12:00予定です
          </StyledCardSection>
          <StyledCardSection delay={0.2} title="帰ってきた！会場限定グッズくじ">
            2020年に実施した会場限定グッズくじが帰ってくる！
            <br />
            今回もハズレなし、1回500円！
            <br />
            賞品は……こちら！
            <AspectRatio maxW="80%" my={6} mx="auto" ratio={2508 / 3541}>
              <AnchorLink href="/assets/img/event/kuji_menu.png">
                <Image
                  src="/assets/img/event/kuji_menu.png"
                  alt="会場限定くじ景品一覧"
                  fill
                />
              </AnchorLink>
            </AspectRatio>
          </StyledCardSection>
          <StyledCardSection delay={0.3} title="アフターイベント">
            即売会パートの後、15:30〜16:30に開催！
            <br />
            企画は2つ！
            <br />
            <Card.Contents
              title={
                <Card.ContentsTitle>1. ナイカクのスープ</Card.ContentsTitle>
              }
            >
              政剣マニフェスティアに関する水平思考クイズです。
              <br />
              水平思考クイズとは、出題者が出す少ない情報量の問題文から、解答者が質問を重ねることで真相に迫るゲームです。
              <br />
              <br />
              今回は、アフターイベントに参加する総理全員が解答者。
              <br />
              出題者（戦挙管理委員会）が考えた難問を解いてもらいます。
              <br />
              解答者は、出題者に対して何を質問してもOK。
              <br />
              ただし、質問に対する出題者からの返答は「YES/NO/関係ない」の三種類のみ。
              <br />
              答えが分かったら「答えは○○ですか？」と出題者に尋ね、「YES」と返答があればゲームクリアです。
              <br />
              一番最初に真相まで辿り着いた総理には景品をご用意しております。
              <br />
              さあ、総理の皆さん。質問を重ねて推理して、問題の真相を解き明かしましょう！
              <br />
              <br />
              ※問題は1～2問を用意する予定です。
              <br />
              ※質問、解答は挙手制です。質問と解答の挙手方法は別々のものを用意して、解答者を優先してご案内させて頂きます。
              <br />
              ※連続での解答はご遠慮ください。
            </Card.Contents>
            <br />
            <Card.Contents
              title={
                <Card.ContentsTitle>2. 全コッカ共通テスト</Card.ContentsTitle>
              }
            >
              ある日、ナイカクは言いました。「総理は文字が読めない」と。
              <br />
              総理がお知らせを読めない訳ないだろ！ということで、全コッカ共通テストを用意しました。
              <br />
              難易度は義務教育相当。問題のジャンルは国語、算数のほか、政マニならではの設問も……！？
              <br />
              ボケて良し、ちゃんと答案して良し。
              <br />
              総理だってお知らせが読めることを、ナイカクに分からせましょう！
              <br />
              <br />
              ※会場にて問題用紙と答案用紙を配布します。
              <br />
              ※筆記試験（試験時間10分）の後、会場スクリーンを使って正答発表。自己採点をしてもらいます。
              <br />
              ※是非、筆記用具（ボールペンor鉛筆＋赤ペン）をご持参ください。
              <br />
              ※当日ペンをお持ちでない方は、お近くの戦挙管理委員会にお声掛けください。
            </Card.Contents>
          </StyledCardSection>
        </Card>
      </Flex>
    </>
  );
};

export default Page;
