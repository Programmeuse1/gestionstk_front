/* tslint:disable */
import { ClientDto } from './client-dto';
import { LigneCommandeClientDto } from './ligne-commande-client-dto';
export interface CommandeClientDto {
  actif?: boolean;
  client?: ClientDto;
  code?: string;
  dateCommande?: number;
  dateEnregistrement?: string;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  id?: number;
  idEntreprise?: number;
  ligneCommandeClients?: Array<LigneCommandeClientDto>;
  observation?: string;
}
