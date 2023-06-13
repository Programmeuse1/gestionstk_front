/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface LigneCommandeClientDto {
  article?: ArticleDto;
  code?: string;
  dateEnregistrement?: string;
  id?: number;
  observation?: string;
  prixUnitaire?: number;
  quantite?: number;
}
