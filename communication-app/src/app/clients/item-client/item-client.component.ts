import { Component, OnInit, Input, Output } from '@angular/core';
import { Client } from 'src/app/input-binding/client.model';

import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {
  
  @Input() client: Client;
  @Output() updateClient = new EventEmitter<Client>();
  @Output() removeClient = new EventEmitter<any>();
  onEdit: boolean = false;
  name: string;
  age: number;
  id: number;

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
    this.id = this.client.id;

  }

  remove(){
    this.removeClient.emit();
  }

  save() {
    this.onEdit = false;
    this.updateClient.emit(
      {id: this.id, name: this.name, age: this.age}
    );
  }
}
