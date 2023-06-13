/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface MvtStockDto {
  article?: ArticleDto;
  dateEnregistrement?: string;
  dateMvt?: number;
  id?: number;
  idEntreprise?: number;
  quantite?: number;
  sourceMvtStk?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvtStk?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
