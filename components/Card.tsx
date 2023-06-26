"use client";

import { Box, Text } from "@chakra-ui/react";
import React from "react";

export interface Card extends React.FC<CardProps> {
  Title: React.FC<CardTitleProps>;
  Section: React.FC<CardSectionProps>;
  SectionTitle: React.FC<CardSectionTitleProps>;
  Contents: React.FC<CardContentsProps>;
  ContentsTitle: React.FC<CardContentsTitleProps>;
}

export interface CardProps {
  title: string | JSX.Element;
  children: React.ReactNode;
}

export interface CardSectionProps {
  title: string | JSX.Element;
  children: React.ReactNode;
}

export interface CardContentsProps {
  title: string | JSX.Element;
  children: React.ReactNode;
}

export interface CardTitleProps extends React.HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode;
}

export interface CardSectionTitleProps
  extends React.HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode;
}

export interface CardContentsTitleProps
  extends React.HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Card: Card = ({ title, children, ...props }) => {
  return (
    <Box
      marginY={12}
      marginX={8}
      paddingY={8}
      paddingX={7}
      width="100%"
      borderRadius="2xl"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="facebook.200"
      bgColor="white"
      {...props}
    >
      <Box
        marginBottom={8}
        borderBottomStyle="solid"
        borderBottomWidth="1px"
        borderBottomColor="gray.800"
      >
        {typeof title === "string" ? <CardTitle>{title}</CardTitle> : title}
      </Box>
      <Text
        as="div"
        fontSize="lg"
        fontFamily={`"Noto Sans JP", sans-serif`}
        fontWeight="200"
        color="blue.800"
      >
        {children}
      </Text>
    </Box>
  );
};

const CardTitle: React.FC<CardTitleProps> = ({ children, ...props }) => {
  return (
    <Text
      as="p"
      fontSize="4xl"
      fontFamily={`"Noto Sans JP", sans-serif`}
      fontWeight="300"
      color="orange.700"
      {...(props as {})}
    >
      {children}
    </Text>
  );
};

const CardSection: React.FC<CardProps> = ({ title, children, ...props }) => {
  return (
    <Box marginTop={6} {...props}>
      <Box marginBottom={3}>
        {typeof title === "string" ? (
          <CardSectionTitle>{title}</CardSectionTitle>
        ) : (
          title
        )}
      </Box>
      <Box marginX={4}>
        <Text
          as="div"
          fontSize="lg"
          fontFamily={`"Noto Sans JP", sans-serif`}
          fontWeight="300"
          color="blue.800"
          lineHeight={1.75}
        >
          {children}
        </Text>
      </Box>
    </Box>
  );
};

const CardSectionTitle: React.FC<CardSectionTitleProps> = ({
  children,
  ...props
}) => {
  return (
    <Text
      as="p"
      fontSize="2xl"
      fontFamily={`"Noto Sans JP", sans-serif`}
      fontWeight="300"
      color="orange.600"
      {...(props as {})}
    >
      {children}
    </Text>
  );
};

const CardContents: React.FC<CardProps> = ({ title, children, ...props }) => {
  return (
    <Box marginTop={4} {...props}>
      <Box marginBottom={2}>
        {typeof title === "string" ? (
          <CardContentsTitle>{title}</CardContentsTitle>
        ) : (
          title
        )}
      </Box>
      <Box marginX={4}>
        <Text
          as="div"
          fontSize="lg"
          fontFamily={`"Noto Sans JP", sans-serif`}
          fontWeight="300"
          color="blue.800"
          lineHeight={1.75}
        >
          {children}
        </Text>
      </Box>
    </Box>
  );
};

const CardContentsTitle: React.FC<CardContentsTitleProps> = ({
  children,
  ...props
}) => {
  return (
    <Text
      as="p"
      fontSize="xl"
      fontFamily={`"Noto Sans JP", sans-serif`}
      fontWeight="300"
      color="orange.500"
      {...(props as {})}
    >
      {children}
    </Text>
  );
};

Card.Title = CardTitle;
Card.Section = CardSection;
Card.SectionTitle = CardSectionTitle;
Card.Contents = CardContents;
Card.ContentsTitle = CardContentsTitle;
