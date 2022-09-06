import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotTeraComponent } from './chatbot-tera/chatbot-tera.component';
import { LoginComponent } from './login/login.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'statistical',
    component: StatisticalComponent,
  },
  {
    path: 'chatbot-tera',
    component: ChatbotTeraComponent,
  },
  {
    path : 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
