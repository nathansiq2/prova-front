import { Routes } from "@angular/router";
import { CadastroComponent } from "../pages/cadastro/cadastro.component";
import { ListaComponent } from "../pages/lista/lista.component";
import { CadastroGuardService } from "../guards/cadastro-guard.service";

export const appRoutes: Routes = [
  {
    path: "lista",
    component: ListaComponent
  },
  {
    path: "cadastro",
    component: CadastroComponent,
    canDeactivate: [CadastroGuardService]
  },
  { path: "", redirectTo: "/lista", pathMatch: "full" },
  { path: "**", component: ListaComponent }
];
