import { instance } from '@/shared/api/instance.ts';

export interface CartItemResponse {
  id: number;
  title: string;
  start_date: string;
  duration: string;
  lessons_amount: number;
  format: string | null;
  brandbook_style_id: string;
  teacher: {
    id: number;
    full_name: string;
    photo: string;
    detail_photo: string;
  };
  product: {
    id: number;
    price: number;
    selected: boolean;
    class_year_id: number;
    class_type_id: number;
    course_type_name: string;
    class_year_name: string;
    course_type_code: string;
  };
}

export interface CartResponse {
  hash: string;
  price: number;
  initial_price: number;
  items: CartItemResponse[];
  coupon: unknown | null;
  bundles: unknown[];
}

export const fetchCart = async (hash: string): Promise<CartResponse> => {
  const { data } = await instance.get('/cart/', { params: { hash } });
  return data;
};
