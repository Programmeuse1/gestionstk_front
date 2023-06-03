/* tslint:disable */
import { Article } from './article';
export interface Category {
  actif?: boolean;
  articles?: Array<Article>;
  code?: string;
  creationDate?: number;
  dateEnregistrement?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
}
