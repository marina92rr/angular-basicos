

import {Component} from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre : string = 'Naruto';
    edad : number = 20;
    
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string {
        //igual:return this.nombre + "-" + this.edad;
        return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre(){
        this.nombre = 'Sasuke';
    }
    cambiarEdad(){
        this.edad = 21;
    }
}