/* tslint:disable */
import { Category } from './category';
export interface Article {
  actif?: boolean;
  category?: Category;
  code?: string;
  creationDate?: number;
  dateEnregistrement?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
