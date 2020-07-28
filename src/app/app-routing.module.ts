import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullComponentComponent} from './Layout/full-component/full-component.component'
import {BlankComponent} from './Layout/blank/blank.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FullComponentComponent },
  { path: '', component: BlankComponent,
    children: [
   
    ]
  },
  { path: '***', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    useHash : false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
