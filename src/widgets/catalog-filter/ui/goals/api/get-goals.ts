import { instance } from '@/shared/api/instance.ts';
import type { Goal } from './class-goals.ts';

export const getGoals = async (offset = 0): Promise<Goal[]> => {
  const response = await instance.get('/v2/seo/goals/', {
    params: {
      offset
    }
  });
  return response.data;
};
