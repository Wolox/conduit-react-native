import CustomText from '@app/components/CustomText';
import { tagsStyles } from '@app/screens/DetailArticle/constants';
import { WINDOW_WIDTH } from '@constants/platform';
import React from 'react';
import RenderHtml from 'react-native-render-html';

export const renderHTML = (body: string) => {
  const source: any = {
    html: body
  };
  return source;
};

enum FILTERS {
  PARAGRAPH = '<p>',
  TITLE = '<h1>',
  SUBTITLE = '<h2>'
}

export const validatorHTML = (body: string) => {
  if (body.includes(FILTERS.PARAGRAPH) || body.includes(FILTERS.TITLE) || body.includes(FILTERS.SUBTITLE)) {
    return (
      <RenderHtml
        contentWidth={WINDOW_WIDTH}
        source={renderHTML(body)}
        enableExperimentalMarginCollapsing={true}
        enableExperimentalGhostLinesPrevention={true}
        tagsStyles={tagsStyles}
      />
    );
  }
  return <CustomText label>{body}</CustomText>;
};
