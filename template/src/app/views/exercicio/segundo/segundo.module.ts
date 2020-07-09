import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SegundoComponent} from './segundo.component';
import {SegundoRoutingModule} from './segundo-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SegundoComponent],
    imports: [
        CommonModule,
        SegundoRoutingModule,
        ReactiveFormsModule
    ]
})
export class SegundoModule {
}
