import { instance } from '@/shared/api/instance.ts';
import type { FaqItem } from './faq-item.ts';

export const fetchFaq = async (offset = 0, limit = 10): Promise<FaqItem[]> => {
  const response = await instance.get('/v2/seo/faq/', {
    params: {
      offset,
      limit,
    },
  });
  return response.data.results;
};
