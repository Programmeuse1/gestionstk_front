/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface MvtStockDto {
  article?: ArticleDto;
  dateEnregistrement?: string;
  dateMvt?: number;
  id?: number;
  idEntreprise?: number;
  quantite?: number;
  typeMvtStk?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
