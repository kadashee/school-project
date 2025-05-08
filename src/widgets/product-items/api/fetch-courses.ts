import { instance } from './instance.ts';

export const fetchCourses = async (offset = 0, limit = 10): Promise<string[]> => {
  const response = await instance.get('/v2/seo/products/', {
    params: {
      offset,
      limit,
    },
  });
  return response.data.results;
};
