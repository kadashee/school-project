import { instance } from '@/shared/api/instance.ts';
import type { ClassTypes } from './class-types.ts';

export const getClassTypes = async (offset = 0): Promise<ClassTypes[]> => {
  const response = await instance.get('/v2/seo/class-types/', {
    params: {
      offset,
    },
  });
  return response.data;
};
