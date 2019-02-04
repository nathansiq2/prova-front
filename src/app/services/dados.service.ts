import { LocalStorageService } from "./local-storage.service";
import { ReflectiveInjector, Injectable } from "@angular/core";
import { DadosModel } from "../models/dados.model";

export const _DADOS = "dados";

@Injectable()
export class DadosService {
  localStorageService: LocalStorageService;

  constructor() {
    let providers = ReflectiveInjector.resolveAndCreate([LocalStorageService]);
    this.localStorageService = providers.get(LocalStorageService);
  }

  getDados() {
    return <Array<DadosModel>>this.localStorageService.readObject(_DADOS);
  }

  getDadosById(id: string) {
    var dados = <Array<DadosModel>>this.localStorageService.readObject(_DADOS);

    return dados.find(dado => dado.id === id);
  }

  editDadosId(dados: DadosModel) {
    var dadosLocal = <Array<DadosModel>>(
      this.localStorageService.readObject(_DADOS)
    );

    var newDadosLocal = new Array<DadosModel>();

    dadosLocal.forEach(arrayItem => {
      if (arrayItem && arrayItem.id == dados.id) {
        arrayItem = dados;
      }

      newDadosLocal.push(arrayItem);
    });

    this.localStorageService.writeObject(_DADOS, newDadosLocal);
  }

  removerDados(id: string) {
    var dadosArray = <Array<DadosModel>>(
      this.localStorageService.readObject(_DADOS)
    );

    dadosArray.forEach((arrayItem, index) => {
      if (arrayItem && arrayItem.id == id) {
        dadosArray.splice(index, 1);
      }
    });

    this.localStorageService.writeObject(_DADOS, dadosArray);
  }

  salvarDados(dados: DadosModel) {
    var dadosArray = <Array<DadosModel>>(
      this.localStorageService.readObject(_DADOS)
    );

    if (!dadosArray) {
      dadosArray = new Array<DadosModel>();
    }
    dadosArray.push(dados);

    this.localStorageService.writeObject(_DADOS, dadosArray);
    return this.localStorageService.writeObject(_DADOS, dadosArray);
  }
}
