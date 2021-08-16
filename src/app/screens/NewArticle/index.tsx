import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Navigation } from '@interfaces/navigation';
import ControlledCustomTextInput from '@components/CustomTextInput/controller';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import {
  validateRequired,
  validateAlphanumeric,
  validateMinLength,
  validateMaxLength
} from '@utils/validations/validateUtils';

import { FIELDS, NewArticleValues, fiedlsValidations } from './constants';
import './i18n';
import styles from './styles';
import Tag from './components/Tag';
import testIds from './testIds';

interface Props extends Navigation {}

const { MIN_LENGHT_FIELD, MAX_TITLE_LENGHT, MAX_DESCRIPTION_LENGHT, MAX_BODY_LENGHT, MIN_LENGTH_TAG } =
  fiedlsValidations();

function NewArticle({ route: { params } }: Props) {
  const { handleSubmit, control, setValue, trigger } = useForm<NewArticleValues>({ mode: 'all' });
  const isEdit = !!params?.article && params?.article?.isEditArticle;
  const [items, setItems] = useState<string[]>(isEdit ? params?.article?.tagList : []);
  const handleDeleteTag = (index: number) => {
    const newItems = items.filter((_, key) => key !== index);
    setItems(newItems);
  };

  const renderItem: ListRenderItem<string> = ({ item, index }) => (
    <Tag text={item} index={index} onDeleteTag={handleDeleteTag} />
  );

  // @TODO: do the quest when you already have the token in the headers
  const handleSubmitArticle = (values: NewArticleValues) => {
    trigger();
    console.log(values);
  };

  useEffect(() => {
    setValue(FIELDS.tagList, items);
  }, [items, setValue]);

  return (
    <FlatList
      renderItem={null}
      data={null}
      ListHeaderComponent={
        <View style={styles.container}>
          <KeyboardAwareScrollView bounces={false} enableOnAndroid>
            {!isEdit && (
              <CustomText green bold style={styles.title}>
                {i18next.t('NEW_ARTICLE:CREATE_ARTICLE')}
              </CustomText>
            )}
            <ControlledCustomTextInput
              defaultValue={isEdit ? params?.article?.title : ''}
              testIDProp={testIds.titleInput}
              control={control}
              label={i18next.t('NEW_ARTICLE:TITLE')}
              name={FIELDS.title}
              placeholder={i18next.t('NEW_ARTICLE:PLACEHODER_TITLE')}
              labelStyle={styles.labelStyle}
              rules={{
                ...validateRequired,
                ...validateMinLength(MIN_LENGHT_FIELD),
                ...validateMaxLength(MAX_TITLE_LENGHT),
                ...validateAlphanumeric
              }}
              maxLength={MAX_TITLE_LENGHT}
            />
            <ControlledCustomTextInput
              defaultValue={isEdit ? params?.article?.description : ''}
              testIDProp={testIds.descriptionInput}
              control={control}
              labelStyle={styles.labelStyle}
              label={i18next.t('NEW_ARTICLE:DESCRIPTION')}
              name={FIELDS.description}
              placeholder={i18next.t('NEW_ARTICLE:PLACEHOLDER_DESCRIPTION')}
              rules={{
                ...validateRequired,
                ...validateMinLength(MIN_LENGHT_FIELD),
                ...validateMaxLength(MAX_DESCRIPTION_LENGHT),
                ...validateAlphanumeric
              }}
              maxLength={MAX_DESCRIPTION_LENGHT}
            />

            <ControlledCustomTextInput
              defaultValue={isEdit ? params?.article?.body : ''}
              testIDProp={testIds.bodyInput}
              control={control}
              multiline
              label={i18next.t('NEW_ARTICLE:BODY')}
              labelStyle={styles.labelStyle}
              name={FIELDS.body}
              placeholder={i18next.t('NEW_ARTICLE:PLACEHOLDER_BODY')}
              rules={{
                ...validateRequired,
                ...validateMinLength(MIN_LENGHT_FIELD),
                ...validateMaxLength(MAX_BODY_LENGHT)
              }}
              maxLength={MAX_BODY_LENGHT}
            />

            <ControlledCustomTextInput
              testIDProp={testIds.tagInput}
              control={control}
              labelStyle={styles.labelStyle}
              label={i18next.t('NEW_ARTICLE:TAGS')}
              name={'addTag'}
              placeholder={i18next.t('NEW_ARTICLE:PLACHEHOLDER_TAGS')}
              onSubmitEditing={({ nativeEvent: { text } }) => {
                if (text.length >= MIN_LENGTH_TAG) setItems([...items, text]);
              }}
            />
            <View style={styles.containerList}>
              <FlatList
                numColumns={2}
                columnWrapperStyle={styles.row}
                data={items}
                keyExtractor={(item, index) => `${item}${index}`}
                renderItem={renderItem}
              />
            </View>
            <CustomButton
              testID={isEdit ? testIds.editArticleButton : testIds.createArticleButton}
              primary
              onPress={handleSubmit(handleSubmitArticle)}
              title={i18next.t(isEdit ? 'NEW_ARTICLE:EDIT_BUTTON' : 'NEW_ARTICLE:CREATE_BUTTON')}
              style={styles.createButton}
            />
          </KeyboardAwareScrollView>
        </View>
      }
    />
  );
}

export default NewArticle;
