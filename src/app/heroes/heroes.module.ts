
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Elementos visibles
    exports: [
        ListadoComponent
    ],
    //Van solo modulos
    imports:[
        CommonModule
    ]
})
export class HeroesModule{}