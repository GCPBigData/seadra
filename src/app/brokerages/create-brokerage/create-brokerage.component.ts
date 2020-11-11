import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import {Brokerage, RequestCreateBrokerage} from '../brokerage.model';
import {BrokeragesService} from '../brokerages.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

declare var $: any;

@Component({
  selector: 'app-create-brokerage',
  templateUrl: './create-brokerage.component.html',
  styleUrls: ['./create-brokerage.component.css']
})
export class CreateBrokerageComponent implements OnInit {

  brokerageForm: FormGroup;
  showSpinner = false;
  statusString: string[] = ['INATIVO' , 'ATIVO'];

  request: RequestCreateBrokerage = {
    name                : '',
    cnpj                : '',
    address             : '',
    addressNeighborhood : '',
    addressCity         : '',
    addressState        : '',
    dayTrade            : '',
    swingTrade          : '',
    iss                 : '5',
    loginAccessCode     : true,
    loginCpf            : true,
    loginEmail          : true,
    loginPassword       : true,
    loginToken          : true,
    status              : 'ATIVO',
    tipo                : '',
    phone               : '',
    website             : '',
    email               : '',
    logo                : '',
  }

  constructor(private brokeragesService: BrokeragesService,
              private formBuilder: FormBuilder,
              private router: Router
              ) {
  }

  gerarForm() {
    this.brokerageForm = this.formBuilder.group({

      name                : [null],
      cnpj: [null,[Validators.required]],
      address             : [null],
      addressNeighborhood : [null],
      addressCity         : [null],
      addressState        : [null],
      dayTrade            : [null],
      swingTrade          : [null],
      iss                 : '5',
      loginAccessCode     : true,
      loginCpf            : true,
      loginEmail          : true,
      loginPassword       : true,
      loginToken          : true,
      status              : 'ATIVO',
      tipo                : [null],
      phone               : [null],
      website             : [null],
      email               : [null],
      logo                : [null]
    });
  }

  ngOnInit() {
   this.gerarForm();
   this.showSpinner = true;
 }

  save() {
    this.brokeragesService.createBrokerage(this.request)
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
    this.brokerageForm.reset();
  }

  showNotificationSucesso() {

    const type = ['', 'info', 'success', 'warning', 'danger'];
    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: 'notifications',
      message: 'Salvo com Suceso !<b></b>'
    }, {
      type: type[color],
      timer: 2000,
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
      timer: 2000,
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
