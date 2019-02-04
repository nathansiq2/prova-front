import { UnidadeMedida } from "../enum/UnidadeMedida.enum";

export class DadosModel {
  id: string;
  nomeItem: string;
  unidadeMedida: UnidadeMedida;
  quantidade: number;
  preco: number;
  produtoPerecivel: boolean;
  dataValidade: Date;
  dataFabricacao: Date;
}


