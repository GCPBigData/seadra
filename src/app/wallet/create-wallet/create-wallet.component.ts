import { Component, OnInit } from '@angular/core';
import { Wallet, RequestCreateWallet } from '../../wallet/wallet.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletService } from '../wallet.service';

declare var $: any;

@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html'
})
export class CreateWalletComponent implements OnInit {

  showSpinner = false;
  response: Wallet;
  walletForm: FormGroup;

  request: RequestCreateWallet = {
  modality: '',
  amount: '',
  situation: '',
  purchaseData: '',
  saleDate: '',
  actionValueDay: '',
  priceAction: '',
  brokerage: [],
  action: [],
  userEntity: [],
  }

  constructor(private walletService: WalletService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  gerarForm() {
    this.walletForm = this.formBuilder.group({
      modality: [null],
      amount: [null],
      situation: [null],
      purchaseData: [null],
      saleDate: [null],
      actionValueDay: [null],
      priceAction: [null],
      brokerage: [null],
      action: [null],
      userEntity: [null]
    });
  }

  ngOnInit(): void {
    this.gerarForm();
    this.showSpinner = true;
  }

  save() {
    this.walletService.createWallet(this.request)
        .subscribe(
            data => {
              this.showNotificationSucesso();
              this.limpa();
            },
            err => {
              this.showNotificationErro();
            })
  }

  limpa() {
    this.walletForm.reset();
  }

  showNotificationSucesso() {

    const type = ['', 'info', 'success', 'warning', 'danger'];
    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: 'notifications',
      message: 'Cadastrado com Sucesso <b></b>'
    }, {
      type: type[color],
      timer: 4000,
      placement: {},
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });

  }

  showNotificationErro() {

    const type = ['', 'info', 'success', 'warning', 'danger'];
    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: 'notifications',
      message: 'Servidor Retornou ERRO !<b></b>'
    }, {
      type: type[color],
      timer: 4000,
      placement: {},
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });
  }
}
