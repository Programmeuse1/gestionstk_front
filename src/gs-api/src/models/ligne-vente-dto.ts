/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface LigneVenteDto {
  article?: ArticleDto;
  code?: string;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
