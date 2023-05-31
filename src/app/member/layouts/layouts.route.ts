import {Routes} from "@angular/router";
import {TopbarComponent} from "./topbar/topbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FooterComponent} from "./footer/footer.component";

export const layoutsRoutes: Routes =[
  {
    path:'',
    component: TopbarComponent,
    outlet:'topbar'
  },
  {
    path:'',
    component: SidebarComponent,
    outlet:'sidebar'
  },
  {
    path:'',
    component: FooterComponent,
    outlet:'footer'
  }
];
