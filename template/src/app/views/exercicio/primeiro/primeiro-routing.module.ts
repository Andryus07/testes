import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrimeiroComponent} from './primeiro.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Primeiro'
    },
    children: [
      {
        path: '',
        redirectTo: 'primeiro'
      },
      {
        path: 'primeiro',
        component: PrimeiroComponent,
        data: {
          title: 'Primeiro'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeiroRoutingModule {
}
