import { request } from './request';
import { locale } from './options';

export const getProviders = async () => {
  return await request('GET', `/providers/locale/${locale}`);
};
