/* tslint:disable */
import { Adresse } from './adresse';
import { CommandeFournisseurDto } from './commande-fournisseur-dto';
export interface FournisseurDto {
  actif?: boolean;
  adresse?: Adresse;
  code?: string;
  commandeFournisseurs?: Array<CommandeFournisseurDto>;
  dateEnregistrement?: string;
  id?: number;
  idEntreprise?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
