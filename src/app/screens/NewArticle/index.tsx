import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, FlatList, ListRenderItem, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ControlledCustomTextInput from '@components/CustomTextInput/controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import Header from '@components/Header';
import ArticlesActions from '@redux/articles/actions';
import Routes from '@constants/routes';
import { isIos } from '@constants/platform';
import {
  validateRequired,
  validateAlphanumeric,
  validateMinLength,
  validateMaxLength
} from '@utils/validations/validateUtils';
import { State } from '@interfaces/reduxInterfaces';
import { ArticleInParams } from '@interfaces/articlesInterface';
import { Nullable } from '@interfaces/globalInterfaces';
import { useNavigationWithParams } from '@utils/navUtils';
import { ConfirmationTypes } from '@screens/Confirmation/constants';

import { FIELDS, NewArticleValues, fiedlsValidations } from './constants';
import './i18n';
import styles from './styles';
import Tag from './components/Tag';
import testIds from './testIds';

interface Props extends ArticleInParams {}
const { MIN_LENGHT_FIELD, MAX_TITLE_LENGHT, MAX_DESCRIPTION_LENGHT, MIN_LENGTH_TAG } = fiedlsValidations();

function NewArticle({ route: { params } }: Props) {
  const { height } = Dimensions.get('screen');
  const editorRef = useRef<QuillEditor>(null);
  const scrollViewRef = useRef<Nullable<KeyboardAwareScrollView>>(null);
  const { handleSubmit, control, setValue, reset } = useForm<NewArticleValues>({
    mode: 'all'
  });
  const navigation = useNavigationWithParams<Routes.NewArticle>();
  const createArticleLoading = useSelector<State, boolean>(state => state.articles.createArticleLoading);
  const dispatch = useDispatch();
  const isEdit = !!params?.article && params?.article?.isEditArticle;
  const [items, setItems] = useState<string[]>(isEdit ? params?.article?.tagList : []);
  const [body, setBody] = useState('');
  const handleDeleteTag = (index: number) => {
    const newItems = items.filter((_, key) => key !== index);
    setItems(newItems);
  };

  const renderItem: ListRenderItem<string> = ({ item, index }) => (
    <Tag text={item} index={index} onDeleteTag={handleDeleteTag} />
  );

  const cleanForm = () => {
    reset({
      title: '',
      description: '',
      body: '',
      tagList: []
    });
  };

  const handleSubmitArticle = (values: NewArticleValues) => {
    if (isEdit) {
      const {
        article: { slug }
      } = params;

      const DATA_SEND = {
        ...params.article,
        title: values.title,
        body,
        description: values.description,
        tagList: values.tagList,
        slug: params.article.slug
      };
      const article = DATA_SEND;
      if (body === '') return;
      dispatch(
        ArticlesActions.updateArticle(
          { slug, article },
          () => {
            navigation.navigate(Routes.Confirmation, {
              type: ConfirmationTypes.SUCCESS_UPDATE_ARTICLE,
              typeError: false
            });
          },
          () => {
            navigation.navigate(Routes.Confirmation, {
              type: ConfirmationTypes.ERROR_REGISTER_ARTICLE,
              typeError: true
            });
          }
        )
      );
    } else {
      dispatch(
        ArticlesActions.createArticle(
          { ...values, body },
          () => {
            cleanForm();
            navigation.navigate(Routes.Confirmation, {
              type: ConfirmationTypes.SUCCESS_REGISTER_ARTICLE,
              typeError: false
            });
          },
          () => {
            cleanForm();
            navigation.navigate(Routes.Confirmation, {
              type: ConfirmationTypes.ERROR_REGISTER_ARTICLE,
              typeError: true
            });
          }
        )
      );
    }
  };
  const handleContentSizeChange = () =>
    isIos && scrollViewRef?.current?.scrollToPosition(0, height - height / 1.2 + 75, true);

  const handleGET = async () => {
    const delta = await editorRef.current?.getHtml();
    setBody(delta);
    setValue('body', body);
  };
  useEffect(() => {
    setValue(FIELDS.tagList, items);
  }, [items, setValue]);

  useEffect(() => {
    if (params?.article?.body) {
      setBody(params.article.body);
    }
  }, [setBody, params]);

  const onSubmitEditing = ({ nativeEvent: { text } }: { nativeEvent: { text: string } }) => {
    if (text.length >= MIN_LENGTH_TAG) setItems([...items, text]);
    setValue(FIELDS.addTag, '');
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isEdit && <Header title={i18next.t('NEW_ARTICLE:CREATE_ARTICLE')} />}
      <KeyboardAwareScrollView ref={scrollViewRef} extraHeight={20} bounces={false} enableOnAndroid>
        <View>
          <ControlledCustomTextInput
            defaultValue={isEdit ? params?.article?.title : ''}
            testIDProp={testIds.titleInput}
            control={control}
            style={styles.customTitleInput}
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
          <View style={styles.containerEditor}>
            <CustomText style={styles.customTextBody} xsmall green>
              {i18next.t('NEW_ARTICLE:PLACEHOLDER_BODY')}
            </CustomText>
            <QuillToolbar editor={editorRef} options="full" theme="dark" />
            <QuillEditor
              onFocus={handleContentSizeChange}
              container={true}
              style={styles.edition}
              ref={editorRef}
              onEditorChange={handleGET}
              initialHtml={params?.article?.body}
            />
          </View>
          <ControlledCustomTextInput
            testIDProp={testIds.tagInput}
            control={control}
            labelStyle={styles.labelStyle}
            label={i18next.t('NEW_ARTICLE:TAGS')}
            name={FIELDS.addTag}
            placeholder={i18next.t('NEW_ARTICLE:PLACHEHOLDER_TAGS')}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
      </KeyboardAwareScrollView>

      <View style={items.length > 0 && styles.containerList}>
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.row}
          data={items}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          loading={createArticleLoading}
          testID={isEdit ? testIds.editArticleButton : testIds.createArticleButton}
          primary
          onPress={handleSubmit(handleSubmitArticle)}
          title={i18next.t(isEdit ? 'NEW_ARTICLE:EDIT_BUTTON' : 'NEW_ARTICLE:CREATE_BUTTON')}
          style={styles.createButton}
        />
      </View>
    </SafeAreaView>
  );
}

export default NewArticle;
