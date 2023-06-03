/* tslint:disable */
import { UtilisateurDto } from './utilisateur-dto';
export interface RolesDto {
  dateEnregistrement?: string;
  id?: number;
  roleName?: string;
  utilisateur?: UtilisateurDto;
}
