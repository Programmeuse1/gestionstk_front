/* tslint:disable */
import { Adresse } from './adresse';
import { UtilisateurDto } from './utilisateur-dto';
export interface EntrepriseDto {
  adresse?: Adresse;
  codeFiscal?: string;
  description?: string;
  email?: string;
  id?: number;
  nom?: string;
  numTel?: string;
  photo?: string;
  siteWeb?: string;
  utilisateurs?: Array<UtilisateurDto>;
}
