/* tslint:disable */
import { CommandeClientDto } from './commande-client-dto';
import { LigneCommandeClientDto } from './ligne-commande-client-dto';
export interface CommandeClientUpdate {
  commandeClientDto?: CommandeClientDto;
  ligneCommandeClientDtoList?: Array<LigneCommandeClientDto>;
}
