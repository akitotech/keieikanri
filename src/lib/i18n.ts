import jaTranslations from '@/locales/ja.json';
import enTranslations from '@/locales/en.json';
import zhCNTranslations from '@/locales/zh-CN.json';
import zhTWTranslations from '@/locales/zh-TW.json';
import neTranslations from '@/locales/ne.json';
import viTranslations from '@/locales/vi.json';
import myTranslations from '@/locales/my.json';
import idTranslations from '@/locales/id.json';
import { type Locale } from './locales';

const translations = {
  ja: jaTranslations,
  en: enTranslations,
  'zh-CN': zhCNTranslations,
  'zh-TW': zhTWTranslations,
  ne: neTranslations,
  vi: viTranslations,
  my: myTranslations,
  id: idTranslations,
};

export function getTranslations(locale: Locale = 'ja') {
  return translations[locale] || translations.ja;
}

export function t(key: string, locale: Locale = 'ja', params?: Record<string, string>) {
  const translation = getTranslations(locale);
  const keys = key.split('.');
  let value: unknown = translation;
  
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  
  if (typeof value !== 'string') {
    return key; // 翻訳が見つからない場合はキーを返す
  }
  
  // パラメータの置換
  if (params) {
    Object.entries(params).forEach(([paramKey, paramValue]) => {
      value = (value as string).replace(`{${paramKey}}`, paramValue);
    });
  }
  
  // HTMLタグの処理
  value = (value as string).replace(/\{strong\}/g, '<strong>');
  value = (value as string).replace(/\{\/strong\}/g, '</strong>');
  value = (value as string).replace(/\{highlight\}/g, '<span class="text-yellow-600 font-extrabold">');
  value = (value as string).replace(/\{\/highlight\}/g, '</span>');
  
  return value;
}

export function formatText(text: string) {
  // 静的エクスポート用のシンプルなテキスト処理
  return text.replace(/\{strong\}/g, '').replace(/\{\/strong\}/g, '');
}
