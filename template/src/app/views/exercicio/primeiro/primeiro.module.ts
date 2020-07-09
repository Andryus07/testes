import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimeiroComponent} from './primeiro.component';
import {PrimeiroRoutingModule} from './primeiro-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PrimeiroComponent],
    imports: [
        CommonModule,
        PrimeiroRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class PrimeiroModule { }
