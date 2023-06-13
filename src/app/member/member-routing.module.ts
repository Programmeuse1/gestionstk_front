import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {layoutsRoutes} from "./layouts/layouts.route";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import("./pages/dashboard/dashboard.module").then(m=> m.DashboardModule)
  },
  {
    path: 'articles',
    loadChildren: () => import("./pages/article/article.module").then(m=> m.ArticleModule)
  },
  {
    path: 'categories',
    loadChildren: () => import("./pages/categorie/categorie.module").then(m=> m.CategorieModule)
  },
  {
    path: 'commandesclients',
    loadChildren: () => import("./pages/commandeclient/cmdclt.module").then(m=> m.CmdcltModule)
  },
  {
    path: 'clients',
    loadChildren: () => import("./pages/client/client.module").then(m=> m.ClientModule)
  },
  {
    path: 'fournisseurs',
    loadChildren: () => import("./pages/fournisseurs/fournisseurs.module").then(m=> m.FournisseursModule)
  },
  {
    path: 'commandesfournisseurs',
    loadChildren: () => import("./pages/cmdfrs/cmdfrs.module").then(m=> m.CmdfrsModule)
  },
  {
    path: 'utilisateurs',
    loadChildren: () => import("./pages/utilisateurs/utilisateurs.module").then(m=> m.UtilisateursModule)
  },
  {
    path: 'mouvementdustock',
    loadChildren: () => import("./pages/mvtstk/mvtstk.module").then(m=> m.MvtstkModule)
  },
  {
    path: 'profil',
    loadChildren: () => import("./pages/profil/profil.module").then(m=> m.ProfilModule)
  },
  {
    path: 'vente',
    loadChildren: () => import("./pages/vente/vente.module").then(m=> m.VenteModule)
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full',
  },
  ...layoutsRoutes,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
