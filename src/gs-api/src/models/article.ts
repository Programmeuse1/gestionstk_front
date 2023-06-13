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
  prix?: number;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
