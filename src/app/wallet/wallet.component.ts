import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Wallet } from './wallet.module';
import { HttpClient } from '@angular/common/http';
import { WalletService } from './wallet.service';
import { map, tap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html'
})
export class WalletComponent implements OnInit {

  showSpinner = false;
  responseWallet: Wallet;
  results$;
  queryField = new FormControl();
  texto = '';

  mudaTermo() {
    this.texto = this.queryField.value;
  }

  constructor(
      private walletService: WalletService,
      private http: HttpClient) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.walletService.getWallet().subscribe(
        res => this.responseWallet = res
    );
    if (this.results$ == null) {
      setTimeout(() => {
        this.showSpinner = false;
      }, 1000);
    }
  }

  onSearch = () => {
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {
      this.showSpinner = true;
      this.results$ = this.http
          .get(this.walletService.walletURLfindName + value)
          .pipe(
              tap((res: string) => res),
              map((res: string) => res)
          );
      this.showSpinner = false;
      this.showNotificatioSearch();
    }
  };

  showNotificatioSearch() {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: 'notifications',
      message: 'Busca Finlizada !<b></b>'
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

  showNotificationLista(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: 'notifications',
      message: 'Buscando no Servidor ... <b>seadra</b>'

    }, {
      type: type[color],
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
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
