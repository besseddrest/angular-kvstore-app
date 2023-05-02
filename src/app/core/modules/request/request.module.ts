import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RequestFormComponent } from './components/request-form/request-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { AdminFormComponent } from './components/admin-form/admin-form.component';

@NgModule({
  declarations: [
    RequestFormComponent,
    AdminFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    RouterModule,
  ]
})
export class RequestModule { }
