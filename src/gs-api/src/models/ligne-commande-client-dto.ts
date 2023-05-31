/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface LigneCommandeClientDto {
  article?: ArticleDto;
  code?: string;
  id?: number;
  prixUnitaire?: number;
  quantite?: number;
}
