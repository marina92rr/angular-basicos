

import {Component} from '@angular/core';

@Component({
    selector: "app-contador",
    template:`
        <h1>{{titulo}}</h1>
        <h3>La base es:<strong>{{base}}</strong></h3>

        <button (click)="acumularBase(1)">+1</button>

        <span>{{numero}}</span>

        <button (click)="acumularBase(-1)">-1</button>
    `
})
        
    export class ContadorComponent {
        public titulo: string = 'Clase 01';
        numero:number = 10;
        base:number = 5;
      
      
        acumularBase(valor:number){
          if (valor == 1){
            this.base +=5;
            this.numero +=1;
          }
          if (valor == -1){
            this.base -=5;
            this.numero -=1;
          }
          
        }
    }