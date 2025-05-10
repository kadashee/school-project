import { instance } from '@/shared/api/instance.ts';
import type { ClassYears } from './class-years.ts';

export const getClassYears = async (offset = 0): Promise<ClassYears[]> => {
  const response = await instance.get('/v2/seo/class-years/', {
    params: {
      offset,
    },
  });
  return response.data;
};
