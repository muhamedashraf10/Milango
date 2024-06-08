import i18next from 'i18next';
import React, {FC, useState} from 'react';
import {Text as NativeText, TextProps} from 'react-native';

import styles from './Text.style';

type TextType = {
  bold?: boolean;
  underline?: boolean;
  text?: string;
  wordsNumber?: number;
  withToggle?: boolean;
  color?:
    | 'primary'
    | 'secondary'
    | 'primaryDark'
    | 'bodyLight'
    | 'bodyDark'
    | 'white'
    | 'black'
    | 'black'
    | 'gray'
    | 'darkGray'
    | 'lightGray'
    | 'success'
    | 'coolGreen'
    | 'smoke'
    | 'orange'
    | 'danger';
  size?:
    | 'xsmall'
    | 'small'
    | 'normal'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
    | 'xxxxlarge';
};

const Text: FC<TextType & TextProps> = ({
  children,
  style,
  bold = false,
  underline = false,
  color = 'bodyDark',
  size = 'small',
  text,
  wordsNumber,
  withToggle = false,
  ...props
}) => {
  const targetStyle = [
    styles.default,
    bold ? styles.bold : {},
    underline ? styles.underline : {},
    styles[color],
    styles[size],
    style,
  ];

  const cutText = (string: string | undefined, number: number | undefined) => {
    return string?.split(' ').slice(0, number);
  };

  const [words, setWords] = useState(cutText(text, wordsNumber));

  const getContent = () => {
    if (!text) {
      return children;
    }
    if (!wordsNumber) {
      return text;
    }
    return (
      <>
        {words?.join(' ')}
        {withToggle && text?.split(' ').length > wordsNumber ? (
          words?.length === wordsNumber ? (
            <>
              {'  '}
              <Text
                color="secondary"
                bold
                underline
                onPress={() => {
                  setWords([text]);
                }}>
                {i18next.t<string>('readMore')}
              </Text>
            </>
          ) : (
            <>
              {'  '}
              <Text
                color="secondary"
                bold
                underline
                onPress={() => {
                  setWords(cutText(text, wordsNumber));
                }}>
                {i18next.t<string>('readLess')}
              </Text>
            </>
          )
        ) : null}
      </>
    );
  };

  return (
    <NativeText {...props} style={targetStyle}>
      {getContent()}
    </NativeText>
  );
};

export default Text;
