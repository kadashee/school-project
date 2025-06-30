import { BrandbookStyleId } from '@/entities/product';

export function getBrandbookIconUrl(id: BrandbookStyleId): string {
  return `/images/brandbook-items/${id}.svg`;
}
