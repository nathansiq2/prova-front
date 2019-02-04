import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SidebarModule } from "primeng/sidebar";
import { HeaderComponent } from "./components/header/header.component";
import { MenuContentComponent } from "./components/menu-content/menu-content.component";
import { DadosService } from "./services/dados.service";
import { TableModule } from "primeng/table";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./utils/route-config";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";
import { ListaComponent } from "./pages/lista/lista.component";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { InputMaskModule } from "primeng/inputmask";
import { ButtonComponent } from "./components/button/button.component";
import { CadastroGuardService } from "./guards/cadastro-guard.service";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { MessagesModule } from "primeng/messages";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { SelectButtonModule } from "primeng/selectbutton";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuContentComponent,
    CadastroComponent,
    ListaComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    TableModule,
    RouterModule.forRoot(appRoutes),
    InputTextModule,
    FormsModule,
    CheckboxModule,
    InputMaskModule,
    ConfirmDialogModule,
    MessagesModule,
    BreadcrumbModule,
    SelectButtonModule
  ],
  providers: [DadosService, CadastroGuardService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
