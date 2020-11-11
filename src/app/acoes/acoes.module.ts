export class Acoes {
    id: number;
    description: string;
    status: string;
    companyFk: string;
}

export interface RequestCreateAcoes {
    description: string;
    status: string;
    companyFk: string;
}

