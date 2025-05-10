interface Teachers {
  id: number;
  slug: string;
  photo: string;
  avatar: string;
  detail_photo: string;
  brandbook_style_id: string;
  full_name: string;
  course_type: number;
  class_years: number[];
  class_types: number[];
  tags: Tag[];
  stats: Stat[];
  first_name_cases: NameCases;
  socials: Socials;
  gender: 'Male' | 'Female' | string;
  alternate_names: string[];
  is_primary: boolean;
  description: Description;
}
