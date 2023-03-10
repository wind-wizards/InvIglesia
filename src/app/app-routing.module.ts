import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'sells', loadChildren: () => import('./sells/sells.module').then(m => m.SellsModule) },
  { path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)},
  { path: 'history', loadChildren: () => import('./history/history.module').then(m => m.HistoryModule)}
];


@NgModule({
  imports: [   RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
