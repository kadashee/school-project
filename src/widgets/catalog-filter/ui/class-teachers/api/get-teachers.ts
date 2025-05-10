import { instance } from '@/shared/api/instance.ts';
import type { Teachers } from './teachers.ts';

export const getTeachers = async (offset = 0): Promise<Teachers[]> => {
  const response = await instance.get('/v2/seo/teachers/', {
    params: {
      offset,
    },
  });
  return response.data;
};
