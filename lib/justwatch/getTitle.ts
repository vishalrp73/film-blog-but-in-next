import { request } from './request';
import { Title } from './types';
import { locale } from './options';

type ContentType = 'movie' | 'show';

export const getTitle = async (
  content_type: ContentType,
  title_id: number,
): Promise<Title> => {
  const id = encodeURIComponent(title_id);
  const contentType = encodeURIComponent(content_type);
  return await request('GET', `/titles/${contentType}/${id}/locale/${locale}`);
};
