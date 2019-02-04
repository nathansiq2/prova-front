import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate } from "@angular/router";
import { CadastroComponent } from "../pages/cadastro/cadastro.component";

@Injectable({
  providedIn: "root"
})
export class CadastroGuardService implements CanDeactivate<CadastroComponent> {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor() {}

  canDeactivate(component: CadastroComponent) {
    if (component.isSaving()) {
      return component.validaFormulario();
    }

    return true;
  }
}
