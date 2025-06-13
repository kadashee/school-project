import { instance } from '@/shared/api/instance.ts';
import type { Faq } from './faq.ts';

export const getFaq = async (offset = 0, limit = 10): Promise<Faq[]> => {
  const response = await instance.get('/v2/seo/faq/', {
    params: {
      offset,
      limit
    }
  });
  return response.data.results;
};
