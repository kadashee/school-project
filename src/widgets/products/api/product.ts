export enum BrandbookStyleId {
  Russian = 'RUSSIAN',
  BasicMathematics = 'BASIC_MATHEMATICS',
  SocialScience = 'SOCIAL_SCIENCE',
  Chemistry = 'CHEMISTRY',
  History = 'HISTORY',
  Physics = 'PHYSICS',
}

export interface Product {
  id: number;
  product_type_id: number;
  title: string;
  image: string | null;
  start_date: string;
  end_date: string;
  lessons_amount: number;
  duration: string;
  course_type_code: string;
  course_type_name: string;
  class_year_name: string;
  monthly_price: number;
  total_price: number | null;
  pack_id: number | null;
  old_price: number | null;
  format: string;
  tags: {
    label: string;
    type: string;
    color: string;
  }[];
  teacher: {
    id: number;
    full_name: string;
    photo: string;
    detail_photo: string;
    url: string;
  };
  brandbook_style_id: BrandbookStyleId;
  url: string;
  lessons_tooltip_text: string;
}

export const brandbookIdToColorMapper = {
  [BrandbookStyleId.Russian]: '#f0864d',
  [BrandbookStyleId.BasicMathematics]: '#9eacd9',
  [BrandbookStyleId.SocialScience]: '#f2d555',
  [BrandbookStyleId.Chemistry]: '#d266ed',
  [BrandbookStyleId.History]: '#f2d555',
  [BrandbookStyleId.Physics]: '#ed6671',
}
