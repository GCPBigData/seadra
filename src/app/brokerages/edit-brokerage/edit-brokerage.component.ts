import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Brokerage } from '../brokerage.model';
import { BrokeragesService } from '../brokerages.service';

declare var $: any;

@Component({
    selector: 'app-edit-brokerage',
    templateUrl: './edit-brokerage.component.html',
    styleUrls: ['./edit-brokerage.component.css']
})
export class EditBrokerageComponent implements OnInit {

    currentBrokerage = null;
    message = '';
    response = Brokerage;
    statusString: string[] = ['INATIVO' , 'ATIVO'];

    constructor(
        private brokeragesService: BrokeragesService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.message = '';
        this.getBrokerangeX(this.route.snapshot.paramMap.get('id'));
    }

   updateBrokerageX() {
        this.brokeragesService.update(this.currentBrokerage.id, this.currentBrokerage)
            .subscribe(
                response => {
                    console.log(response);
                    this.message = 'ATUALIZADO';
                },
                error => {
                    console.log(error);
                });
    }

    getBrokerangeX(id) {
        this.brokeragesService.get(id)
            .subscribe(
                data => {
                    this.currentBrokerage = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    showNotificationSucesso(from, align) {

        const type = ['', 'info', 'success', 'warning', 'danger'];
        const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: 'notifications',
            message: 'MODIFICADO COM SUCESSO <b></b>'
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

   showNotificationErro(from, align) {
        const type = ['danger'];

        const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: 'notifications',
            message: 'ATUALIZADO COM SUCESSO <b></b>'

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
