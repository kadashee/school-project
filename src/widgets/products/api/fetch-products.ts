import { instance } from '@/shared/api/instance.ts';
import type { Product } from './product.ts';

export const fetchProducts = async (offset = 0, limit = 10): Promise<Product[]> => {
  const response = await instance.get('/v2/seo/products/', {
    params: {
      offset,
      limit,
    },
  });
  return response.data.results;
};
