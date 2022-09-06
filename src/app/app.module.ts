import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ChatbotTeraComponent } from './chatbot-tera/chatbot-tera.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    StatisticalComponent,
    NavbarComponent,
    LoginComponent,
    UserComponent,
    ChatbotTeraComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
