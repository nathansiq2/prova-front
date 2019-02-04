import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DadosModel } from "./../../models/dados.model";
import { DadosService } from "../../services/dados.service";
import { uniqueId } from "./../../utils/unique-id";
import { ActivatedRoute } from "@angular/router";
import { SelectItem } from "primeng/api";
import { UnidadeMedida } from "./../../enum/UnidadeMedida.enum";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CadastroComponent implements OnInit {
  types: SelectItem[];
  dados: DadosModel;
  saving: boolean;
  editing: boolean;
  unidadeMedidaValid: boolean;
  nomeItemValid: boolean;
  precoItemValid: string;
  dataFabricacaoValid: string;
  dataValidadeValid: string;
  unidade: string;
  selectedUnidade: UnidadeMedida;

  constructor(
    private dadosService: DadosService,
    private route: ActivatedRoute
  ) {
    this.types = [
      { label: "Litro", value: 0, icon: "" },
      { label: "Quilograma", value: 1, icon: "" },
      { label: "Unidade", value: 2, icon: "" }
    ];

    this.dados = new DadosModel();
    this.saving = false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.editing = true;
        this.dados = this.dadosService.getDadosById(params.id);
      }
    });
  }

  salvarDados() {
    if (this.editing) {
      this.saving = true;

      if (this.validaFormulario()) {
        this.dadosService.editDadosId(this.dados);
      }
    } else {
      this.saving = true;

      if (this.validaFormulario()) {
        this.dados.id = uniqueId;
        this.dadosService.salvarDados(this.dados);
      }
    }

    setTimeout(() => {
      this.saving = false;
    }, 1000);
  }

  validaFormulario() {
    let valid = true;

    if (!this.dados.nomeItem) {
      this.nomeItemValid = true;
      valid = false;
    }

    if (!this.dados.preco) {
      this.precoItemValid = "input-error";
      valid = false;
    }

    if (!this.dados.dataFabricacao) {
      this.dataFabricacaoValid = "input-error";
      valid = false;
    }

    if (this.dados.produtoPerecivel) {
      if (!this.dados.dataValidade) {
        this.dataValidadeValid = "input-error";
        valid = false;
      }
    }
    return valid;
  }

  isSaving() {
    return this.saving;
  }

  changeUnidadeMedida() {
    switch (this.dados.unidadeMedida) {
      case UnidadeMedida.Litro:
        this.unidade = "lt";
        break;
      case UnidadeMedida.Quilograma:
        this.unidade = "kg";
        break;
      case UnidadeMedida.Unidade:
        this.unidade = "un";
        break;
      default:
        break;
    }
  }
}
