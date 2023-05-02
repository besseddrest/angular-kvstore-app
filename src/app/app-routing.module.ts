import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueueComponent } from './core/modules/queue/components/queue/queue.component';
import { RequestFormComponent } from './core/modules/request/components/request-form/request-form.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'request', component: RequestFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
