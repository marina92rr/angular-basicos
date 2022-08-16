import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Naruto','Hinata', 'Sasuke', 'Sakura','Itachi'];
  heroeBorrado : string = '';
  
borrarHeroe(){
  //shift(): borra el primer elemento de un array
  //|| '': como heroeBorrado regresa un string/undefined 
  //se debe dar las 2 opciones
    this.heroeBorrado = this.heroes.shift() || '';
    

}

}
