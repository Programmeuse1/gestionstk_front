/* tslint:disable */
import { Adresse } from './adresse';
export interface ClientDto {
  actif?: boolean;
  adresse?: Adresse;
  code?: string;
  dateEnregistrement?: string;
  id?: number;
  id_Entreprise?: number;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
