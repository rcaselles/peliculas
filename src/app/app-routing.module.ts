import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pelis', pathMatch: 'full'
  },
  {
    path: 'pelis',
    loadChildren: () => import('./paginas/pelis/pelis.module').then( m => m.PelisPageModule)
  },
  {
    path: 'pelis/:id',
    loadChildren: () => import('./paginas/detalles/detalles.module').then( m => m.DetallesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
