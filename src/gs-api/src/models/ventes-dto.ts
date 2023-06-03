/* tslint:disable */
import { LigneVenteDto } from './ligne-vente-dto';
export interface VentesDto {
  code?: string;
  dateEnregistrement?: string;
  datevente?: number;
  id?: number;
  id_Entreprise?: number;
  ligneVentes?: Array<LigneVenteDto>;
  observation?: string;
}
