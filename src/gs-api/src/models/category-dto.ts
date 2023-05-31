/* tslint:disable */
import { Article } from './article';
export interface CategoryDto {
  articles?: Array<Article>;
  code?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
}
