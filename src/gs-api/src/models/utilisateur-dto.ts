/* tslint:disable */
import { Adresse } from './adresse';
import { EntrepriseDto } from './entreprise-dto';
import { RolesDto } from './roles-dto';
export interface UtilisateurDto {
  adresse?: Adresse;
  dateDeNaissance?: number;
  email?: string;
  entreprise?: EntrepriseDto;
  id?: number;
  motDePasse?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
  roles?: Array<RolesDto>;
}
