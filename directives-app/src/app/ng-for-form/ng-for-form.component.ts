import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string= "";
  address: string= "";
  phone: string= "";
  city: string= "";
  age: number= 0;

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Brasília", state: "DF" },
    { name: "Rio de Janeiro", state: "RJ" },
    { name: "Nova York", state: "NYC" },
  ];

  client = [];

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.client.push( //Adiciona um item ao array
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        city: this.city,
        age: this.age
      }
    );
    this.cancel();
    console.log(this.client);
  }

  cancel(){
    this.name= "";
    this.address= "";
    this.phone= "";
    this.city= "";
    this.age= 0;
    
  }
  delete(i:number){
    this.client.splice(i, 1); // Splice remove um item do array. splice( index de onde deve iniciar a remoção, quantidade de valores removidos(se não informado, removerá todos os valores do index início até o final da array))
  }
}
