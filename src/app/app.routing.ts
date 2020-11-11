import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrokeragesComponent } from './brokerages/brokerages.component';
import { CreateBrokerageComponent } from './brokerages/create-brokerage/create-brokerage.component';
import { EditBrokerageComponent } from './brokerages/edit-brokerage/edit-brokerage.component';
import { CompanyComponent } from './company/company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { WalletComponent } from './wallet/wallet.component';
import { EditWalletComponent } from './wallet/edit-wallet/edit-wallet.component';
import { CreateWalletComponent } from './wallet/create-wallet/create-wallet.component';

import { AdminComponent } from './admin';
import { LoginComponent } from './login';

import { AuthGuard } from './_helpers';
import { Role } from './_models';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {HomeComponent} from './home';
import {EmolumentosComponent} from './emolumentos';
import {AcoesComponent} from './acoes/acoes.component';
import { TecnicoComponent } from './tecnico';
import { CreateTecnicoComponent } from './tecnico/create-tecnico/create-tecnico.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'user',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'emolumentos',
    component: EmolumentosComponent,
    canActivate: [AuthGuard]
  },
  /*brokerages*/
  {
    path: 'brokerages',
    component: BrokeragesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-brokerage',
    component: CreateBrokerageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-brokerage/:id',
    component: EditBrokerageComponent,
    canActivate: [AuthGuard]
  },
  /*company*/
  {
    path: 'company',
    component: CompanyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-company/:id',
    component: EditCompanyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-company',
    component: CreateCompanyComponent,
    canActivate: [AuthGuard]
  },
  /*wallet*/
  {
    path: 'wallet',
    component: WalletComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-wallet/:id',
    component: EditWalletComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-wallet',
    component: CreateWalletComponent,
    canActivate: [AuthGuard]
  },
  /*acoes*/
  {
    path: 'acoes',
    component: AcoesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-acoes/:id',
    component: EditWalletComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-acoes',
    component: CreateWalletComponent,
    canActivate: [AuthGuard]
  },

   /*tecnicos*/
   {
    path: 'tecnicos',
    component: TecnicoComponent,
    canActivate: [AuthGuard]
   },
   {
    path: 'create-tecnico',
    component: CreateTecnicoComponent,
    canActivate: [AuthGuard]
  },

  /*full*/
  { path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
