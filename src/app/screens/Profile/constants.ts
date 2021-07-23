const ANDROID_KEYBOARD_OFFSET = 10;
export const ANDROID_SCROLLVIEW_PROPS = {
  enableOnAndroid: true,
  extraScrollHeight: ANDROID_KEYBOARD_OFFSET,
  extraHeight: ANDROID_KEYBOARD_OFFSET
};

export const FIELDS = {
  username: 'username',
  email: 'email',
  description: 'description'
} as const;

export interface ProfileFormValues {
  [FIELDS.username]: string;
  [FIELDS.email]: string;
  [FIELDS.description]: string;
}
