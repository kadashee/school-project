import { instance } from '@/shared/api/instance.ts';
import type { ClassYear } from './class-year.ts';

export const getClassYears = async (offset = 0): Promise<ClassYear[]> => {
  const response = await instance.get('/v2/seo/class-years/', {
    params: {
      offset
    }
  });
  return response.data;
};
