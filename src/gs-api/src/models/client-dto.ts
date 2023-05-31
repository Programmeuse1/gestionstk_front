/* tslint:disable */
import { Adresse } from './adresse';
export interface ClientDto {
  adresse?: Adresse;
  id?: number;
  id_Entreprise?: number;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
