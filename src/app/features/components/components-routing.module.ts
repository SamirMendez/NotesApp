import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'notes',
    loadChildren: () => import('./private/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./private/notes/notes.module').then( m => m.NotesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
