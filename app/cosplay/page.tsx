"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Text,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Tr,
  keyframes,
} from "@chakra-ui/react";
import { TwoWayLayout as Layout } from "@/components/TwoWayLayout";
import { AnchorLink } from "@/components/AnchorLink";
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
    <Layout>
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
                !transitionEnded ? "menuHeaderTransition cosplay" : undefined
              }
            >
              コスプレ参加をする総理の皆さんへ
            </Card.Title>
          }
        >
          <StyledCardSection delay={0} title="コスプレ入場について">
            ・更衣室開放時間は【10:30〜18:00】の予定となっております。
            <br />
            ・更衣室入室の際は、コスプレ受付にお声がけください。
            <br />
            ・コスプレ更衣室は、一般参加/サークル参加を問わず、10:30よりご利用いただけます。
            <br />
            ・サークル参加のコスプレ総理は、10:30より即売会エリアへの入場が可能です。
            <br />
            ・一般参加のコスプレ総理は、12:30の一般総理入場開始まで2階廊下でお待ちください。なお、1階や建物外部にコスプレ衣装のまま移動することはできません。
          </StyledCardSection>
          <StyledCardSection delay={0.1} title="コスプレ受付について">
            ・イベント入場料の他、コスプレ登録・更衣室使用料として【500円】を頂戴いたします。
            <br />
            ・コスプレ参加名簿に総理ネームをご記入いただきます。ご協力をお願いいたします。
            <br />
            ・当日お困りの事や不明点がございましたら、最寄りの戦挙管理委員までお声がけください。
          </StyledCardSection>
          <StyledCardSection delay={0.2} title="更衣について">
            ・更衣室は所定の更衣室のみをご利用ください。
            <br />
            ・トイレでの着替えや、ヘアースプレーなどの使用、地毛及びウィッグのカットは厳禁です。
            <br />
            ・更衣室はきれいにご利用ください。荷物・ゴミ等の放置は禁止です。
            <br />
            ・更衣室内での一切の撮影行為を禁止します。
            <br />
            ・更衣室は【18:00完全閉鎖】を予定しておりますが変更されることがあります。変更があり次第告知いたしますが、閉鎖時間は厳守いただきますようお願いいたします。
          </StyledCardSection>
          <StyledCardSection delay={0.3} title="衣装について">
            ・国内外を問わず、リアルな軍服・国旗・階級章の着用は禁止します。実在の人物、団体とは何の関係もないただの美少女が戦うファンタジーですからね。
            <br />
            ・コスプレや、コスプレと思われるような衣服・派手なメイクでの入退場は禁止です。一般常識の範囲内におさまる服装でご来場ください。
            <br />
            ・過度に露出の多いコスチュームはお避けください。公式立ち絵に従う範囲で、必ずボディスーツ・肌着・サポーターなどを着用し、露出対策をお願いいたします。
            <br />
            ・水着コスプレはご遠慮ください。
            <br />
            ・コスプレとしての着ぐるみ（頭にかぶり物をしていて顔が見えないものを指します）の着用は可能です。
            <br />
            ・女装をする男性コスプレ総理の方は、わき毛、すね毛、ひげなどの露出する部分の毛は処理をし、生足の露出は避けてタイツ、ストッキング、スパッツ等を着用してください。ご協力をお願い申し上げます。
            <br />
            ・更衣室の入退室時は、戦挙管理委員による衣装チェックにご協力ください。過度な露出が認められる場合は、上着などの着用をお願いする場合があります。
            <br />
            ・戦挙管理委員から衣装修正の指示を受けた総理は更衣室に戻り、その箇所を速やかに修正してください。
          </StyledCardSection>
          <StyledCardSection delay={0.4} title="コスプレ可能エリアについて">
            ・コスプレは【2階フロアのみ可能】です。
            <br />
            ・コスプレと判断される服装、メイクで1F及び館外へ出られることはお控えください。
          </StyledCardSection>
          <StyledCardSection delay={0.5} title="会場内マナーについて">
            ・会場内を走ることや、場内・周辺でのパフォーマンス等（走る・飛ぶ・騒ぐ・振り回す・楽器をならす等の行為）はおやめください。事故や怪我のもととなります。
            <br />
            ・長物などは破損や周囲の邪魔になる恐れがありますので、会場外およびサークルスペースではケース等に入れて持ち運びください。
            <br />
            ・お荷物は更衣室や本部での預かりが可能ですが、貴重品は必ずご携帯ください。万一紛失されましても、責任を負いかねます。あらかじめご了承ください。
            <br />
            ・イベント時間中に落し物や紛失物が発生した場合は、本部までお越しください。
            <br />
            ・不審物を発見した場合、不用意に触らず戦挙管理委員をお呼びください。
          </StyledCardSection>
          <StyledCardSection delay={0.6} title="持ち込み可能物品について">
            ・エアガン他、素材が固く、人に当たると危害をあたえるおそれのあるものの持ち込みは禁止です。
            <Card.Contents title="">
              持ち込み
              <Text as="span" fontWeight="700">
                不可
              </Text>
              な素材例：金属等硬質で尖っているあるいは切断面が鋭利なもの
              <br />
              持ち込み
              <Text as="span" fontWeight="700">
                可能
              </Text>
              な素材例：ダンボール・ウレタン（ライオンボード）／紙・柔らかい粘土（乾燥しても過度に固くならないもの）／キャスト・プラ板・プラスチックダンボールなどのプラスチック
            </Card.Contents>
            <br />
            ・その他、戦挙管理委員が取り扱いによっては周囲に危害を加えると判断したものは、持ち込みをご遠慮いただきます。
            <br />
            ・危険行為（振り回す等）が見られ、戦挙管理委員が危険であると判断した場合、いかなる素材製であっても没収させていただく場合があります。
          </StyledCardSection>
          <StyledCardSection delay={0.7} title="撮影について">
            ・撮影は無料で行えますが、必ず被写体の政霊や総理の許可を取りましょう。
            <br />
            ・動画撮影は厳禁です。
            <br />
            ・撮影したものをSNSにアップロードする際には、被写体の方に許可を得てください。
            <br />
            ・撮影は2階の会場のみ許可されています。被写体の背後にサークルスペースが写り込まないようにご配慮ください。
            <br />
            ・携帯電話による撮影も、許可された場所でのみ可能です。
            <br />
            ・盗撮など、周囲の迷惑となる撮影行為が見られた場合、戦挙管理委員の判断により注意または強制退場いただく場合があります。
          </StyledCardSection>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Page;
