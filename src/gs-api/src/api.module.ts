/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { ArticlesApiService } from './services/articles-api.service';
import { AuthApiService } from './services/auth-api.service';
import { CategoriesApiService } from './services/categories-api.service';
import { ClientsApiService } from './services/clients-api.service';
import { CommandesclientsApiService } from './services/commandesclients-api.service';
import { CommandesfournisseursApiService } from './services/commandesfournisseurs-api.service';
import { EntrepriseApiService } from './services/entreprise-api.service';
import { FournisseurApiService } from './services/fournisseur-api.service';
import { JaspertReportApiService } from './services/jaspert-report-api.service';
import { MvtstockApiService } from './services/mvtstock-api.service';
import { RolesApiService } from './services/roles-api.service';
import { UtilisateurApiService } from './services/utilisateur-api.service';
import { VentesApiService } from './services/ventes-api.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    ArticlesApiService,
    AuthApiService,
    CategoriesApiService,
    ClientsApiService,
    CommandesclientsApiService,
    CommandesfournisseursApiService,
    EntrepriseApiService,
    FournisseurApiService,
    JaspertReportApiService,
    MvtstockApiService,
    RolesApiService,
    UtilisateurApiService,
    VentesApiService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
