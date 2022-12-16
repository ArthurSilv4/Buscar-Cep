 import { Component } from '@angular/core';
import { IonLabel, IonText } from '@ionic/angular';
import { Subscriber } from 'rxjs';

//Se eu quero usar um serviço devo importa-lo 
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private cepService : CepService) {}

  cep : string;

  public cepp;
  public cidade;
  public bairro;
  public estado;
  public rua;
 


  buscarCep(){ 

    console.log("Testando");
    this.cepService.getCEP(this.cep).subscribe( (data) => {

      this.cepp = data['cep'];
      this.cidade = data['city'];
      this.bairro = data['neighborhood'];
      this.estado = data['state'];
      this.rua = data['street'];


      console.log(data); 
      // console.log(data['bairro']);
      //console.log(data['neighborhood']);
      //console.log(data['cep']);
      // console.log(data['complemento']);
      // console.log(data['ddd']);
      // console.log(data['gia']);
      // console.log(data['ibge']);
      // console.log(data['localidade']);
      // console.log(data['logradouro']);
      // console.log(data['siafi']);
      // console.log(data['uf']);

    });
  }

  ionViewDidEnter(){
    this.buscarCep();
  }

}
