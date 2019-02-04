import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DadosModel } from "./../../models/dados.model";
import { DadosService } from "../../services/dados.service";
import { ConfirmationService } from "primeng/api";
import { UnidadeMedida } from "./../../enum/UnidadeMedida.enum";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ListaComponent implements OnInit {
  dados: DadosModel[];
  cols: any[];
  msgs: any[];

  constructor(
    private dadosService: DadosService,
    private confirmationService: ConfirmationService
  ) {
    this.dados = new Array<DadosModel>();

    this.getDadosLocal();
  }

  async getDadosLocal() {
    this.dados = await this.dadosService.getDados();
  }

  ngOnInit() {
    this.cols = [
      { field: "nomeItem", header: "Nome do item" },
      { field: "unidadeMedida", header: "Unidade de medida" },
      { field: "quantidade", header: "Quantidade" },
      { field: "preco", header: "Preço" },
      { field: "produtoPerecivel", header: "Produto perecível" },
      { field: "dataValidade", header: "Data de validade" },
      { field: "dataValidade", header: "Data de fabricação" }
    ];
  }

  confirmarExclusao(id: string) {
    this.confirmationService.confirm({
      message: "Você deseja excluir este registro?",
      header: "Confirmação",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.msgs = [
          {
            severity: "sucess",
            summary: "Registro excluído com sucesso",
            detail: ""
          }
        ];
        this.removerDado(id);
      }
    });
  }

  removerDado(id: string) {
    this.dadosService.removerDados(id);
    this.getDadosLocal();
  }

  teste(unidadeMedida: UnidadeMedida) {
    switch (unidadeMedida) {
      case UnidadeMedida.Litro:
        return "Litro";
      case UnidadeMedida.Quilograma:
        return "Quilograma";
      case UnidadeMedida.Unidade:
        return "Unidade";
      default:
    }
  }
}
