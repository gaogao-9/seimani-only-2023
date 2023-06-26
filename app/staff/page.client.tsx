"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Flex, keyframes, Center, Avatar } from "@chakra-ui/react";
import { AnchorLink } from "@/components/AnchorLink";
import { Card } from "@/components/Card";
import { staffs } from "@/foundation/staffs";

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

const StyledIconWrapper = styled.div<{ delay: number }>`
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
                !transitionEnded ? "menuHeaderTransition staff" : undefined
              }
            >
              スタッフ一覧
            </Card.Title>
          }
        >
          <Card.Section title="">
            <Center flexWrap="wrap">
              {staffs.map((staff, i) => (
                <StyledIconWrapper delay={i * 0.1} key={staff.name}>
                  {!staff.disabled ? (
                    <AnchorLink href={`https://twitter.com/${staff.name}`}>
                      <Avatar
                        size="2xl"
                        m="3"
                        name={staff.nickname}
                        src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                      />
                    </AnchorLink>
                  ) : (
                    <Avatar
                      size="2xl"
                      name={staff.nickname}
                      src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                    />
                  )}
                </StyledIconWrapper>
              ))}
            </Center>
          </Card.Section>
        </Card>
      </Flex>
    </>
  );
};

export default Page;
