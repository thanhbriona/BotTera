import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'list-user', component: ListUserComponent }];

@NgModule({
  declarations: [ListUserComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersModule {}
