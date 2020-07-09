import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SegundoComponent} from './segundo.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Segundo'
    },
    children: [
      {
        path: '',
        redirectTo: 'segundo'
      },
      {
        path: 'segundo',
        component: SegundoComponent,
        data: {
          title: 'Segundo'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegundoRoutingModule {
}
