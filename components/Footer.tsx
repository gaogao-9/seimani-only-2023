"use client";

import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

const Wrapper = styled.div`
  height: 60px;
  background-color: var(--chakra-colors-orange-700);
  overflow: hidden;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Line = styled.span`
  margin: 0 0.2em;
  white-space: nowrap;
`;

export const Footer: React.FC = (props) => (
  <Wrapper {...props}>
    <Contents>
      <Line>
        <Text fontSize="xs" color="orange.50">
          政剣マニフェスティアオンリーイベント
        </Text>
      </Line>
      <Line>
        <Text fontSize="xs" color="orange.50">
          戦挙管理委員会
        </Text>
      </Line>
    </Contents>
  </Wrapper>
);
