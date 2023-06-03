/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface ArticleDto {
  actif?: boolean;
  category?: CategoryDto;
  code?: string;
  dateEnregistrement?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
