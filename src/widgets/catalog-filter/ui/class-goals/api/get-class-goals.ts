import { instance } from '@/shared/api/instance.ts';
import type { ClassGoals } from './class-goals.ts';

export const getClassGoals = async (offset = 0): Promise<ClassGoals[]> => {
  const response = await instance.get('/v2/seo/goals/', {
    params: {
      offset,
    },
  });
  return response.data;
};
