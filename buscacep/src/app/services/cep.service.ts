import { Injectable } from '@angular/core';

//Adicionamos a importação do cliente HTTP
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class CepService {

  //Vamos injetar o cliente HTTP no construtor da nossa classe
  constructor(private httpClient : HttpClient) { }

  private apiEndpoint : string = "https://brasilapi.com.br/api/cep/v2/" ; 
  // private tipoRetorno : string = "/json/unicode/" ; 
  private tipoRetorno : string = "" ; 

  // Esta função depende do recebimento de um parametro com o número do cep? 
  public getCEP(cep : string ){
    console.log(`${this.apiEndpoint}${cep}${this.tipoRetorno}`); 
    return this.httpClient.get(`${this.apiEndpoint}${cep}${this.tipoRetorno}`); 
  }

}
