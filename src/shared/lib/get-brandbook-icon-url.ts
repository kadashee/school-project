import { BrandbookStyleId } from '@/widgets/products/api/product.ts';

export function getBrandbookIconUrl(id: BrandbookStyleId): string {
  return `/images/brandbook-items/${id}.svg`;
}
