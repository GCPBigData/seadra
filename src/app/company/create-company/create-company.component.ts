import { Component, OnInit } from '@angular/core';
import { RequestCreateCompany } from '../company.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';
import { SectorService } from '../../sector/sector.service';
import { Sector } from '../../sector/sector.module';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
    selector: 'app-create-company',
    templateUrl: './create-company.component.html',
    styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

    showSpinner = false;
    companyForm: FormGroup;
    sectores$: Observable<Sector[]>;
    statusString: string[] = ['INATIVO' , 'ATIVO'];

    // TODO: usado para salvar
    request: RequestCreateCompany = {
        cnpj: '',
        mainActivity: '',
        market: '',
        name: '',
        setorialClassification: '',
        site: '',
        status: '',
        sector: null
    }
       constructor(private companyService: CompanyService,
                private sectorService: SectorService,
                private formBuilder: FormBuilder,
    ) {
    }

    // TODO: usado para gerar reconhecimento do combo
    gerarForm() {
        this.companyForm = this.formBuilder.group({
            cnpj: [null, [ Validators.required ]],
            mainActivity: [null],
            market: [null],
            name: [null],
            setorialClassification: [null],
            site: [null],
            status: [null],
            sector: [null]
        });
    }

    ngOnInit() {
        this.gerarForm();
        this.showSpinner = true;
        // TODO: Combo para Sector
        this.sectores$ = this.sectorService.getSector();
    }

    save() {
        this.companyService.createCompany(this.request)
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
        this.companyForm.reset();
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
