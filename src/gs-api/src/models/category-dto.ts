/* tslint:disable */
import { Article } from './article';
export interface CategoryDto {
  actif?: boolean;
  articles?: Array<Article>;
  code?: string;
  dateEnregistrement?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
}
