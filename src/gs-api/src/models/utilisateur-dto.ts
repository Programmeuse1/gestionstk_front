/* tslint:disable */
import { Adresse } from './adresse';
import { EntrepriseDto } from './entreprise-dto';
import { RolesDto } from './roles-dto';
export interface UtilisateurDto {
  actif?: boolean;
  adresse?: Adresse;
  code?: string;
  dateDeNaissance?: number;
  dateEnregistrement?: string;
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
