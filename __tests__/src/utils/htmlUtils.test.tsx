import React from 'react';
import RenderHTML from 'react-native-render-html';
import CustomText from '@components/CustomText';
import { validatorHTML,renderHTML } from '@utils/htmlUtils';

describe('validatorHTML', () => {
  test('body was a richText', async () => {
    const body = '<p>Buenos días</p>';
    const result = await validatorHTML(body);
    expect(result).toStrictEqual(
      <RenderHTML
        contentWidth={750}
        enableExperimentalGhostLinesPrevention={true}
        enableExperimentalMarginCollapsing={true}
        source={{ html: body }}
        tagsStyles={{
          a: { color: '#5CB85C', textDecorationLine: 'none' },
          body: { color: '#555555', whiteSpace: 'normal' },
          h1: { fontSize: 14, marginVertical: 4, padding: 0 },
          h2: { fontSize: 14, marginVertical: 4, padding: 0 },
          li: { paddingBottom: 4 },
          ol: { margin: 0, padding: 0 },
          p: { fontSize: 12, marginVertical: 4, padding: 0 }
        }}
      />
    );
    expect(result).not.toBeNull();
  });
  test('body was a plainText', async () => {
    const body = 'buenos días';
    const result = await validatorHTML(body);
    expect(result).not.toBeNull();
    expect(result).toStrictEqual(<CustomText label={true}>{body}</CustomText>);
  });
});

describe('test RenderHTML', () => {
  test('renderHTML Result not be null', () => {
    const body='Hello World';
    const result=renderHTML(body);
    expect(result).not.toBeNull();
  })
  test('renderHTML result strictEqual', () => {
    const body='Hello World';
    const result=renderHTML(body);
    expect(result).toStrictEqual({
      html: body
    })
  })
})