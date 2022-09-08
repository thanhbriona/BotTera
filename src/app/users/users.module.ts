import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { DialogUserComponent } from './dialog-user/dialog-user.component';

const routes: Routes = [{ path: 'list-user', component: ListUserComponent }];

@NgModule({
  declarations: [ListUserComponent, DialogUserComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    RouterModule.forChild(routes),
  ],
})
export class UsersModule {}
