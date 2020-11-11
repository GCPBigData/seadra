import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateBrokerageComponent } from './brokerages/create-brokerage/create-brokerage.component';
import { EditBrokerageComponent } from './brokerages/edit-brokerage/edit-brokerage.component';
import { BrokeragesComponent } from './brokerages/brokerages.component';
import { CompanyComponent } from './company/company.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { WalletComponent } from './wallet/wallet.component';
import { CreateWalletComponent } from './wallet/create-wallet/create-wallet.component';
import { EditWalletComponent } from './wallet/edit-wallet/edit-wallet.component';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { EmolumentosComponent } from './emolumentos/emolumentos.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SectorComponent } from './sector/sector.component';
import { AcoesComponent } from './acoes/acoes.component';
import { TecnicoComponent } from './tecnico/tecnico.component';
import { CreateTecnicoComponent } from './tecnico/create-tecnico/create-tecnico.component';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,

    CreateBrokerageComponent,
    EditBrokerageComponent,
    BrokeragesComponent,

    CompanyComponent,
    CreateCompanyComponent,
    EditCompanyComponent,

    WalletComponent,
    CreateWalletComponent,
    EditWalletComponent,

    HomeComponent,
    AdminComponent,
    LoginComponent,
    EmolumentosComponent,
    UserProfileComponent,
    SectorComponent,

    EmolumentosComponent,
    AcoesComponent,
    
    TecnicoComponent,
    CreateTecnicoComponent,
    PessoaComponent,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  exports: [
    NavbarComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
