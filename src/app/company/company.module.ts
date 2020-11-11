export class Company {
    id: number;
    cnpj: string;
    mainActivity: string;
    market: string;
    name: string;
    setorialClassification: string;
    site: string;
    status: string;
    sector: [];
}

export interface RequestCreateCompany {
    cnpj: string;
    mainActivity: string;
    market: string;
    name: string;
    setorialClassification: string;
    site: string;
    status: string;
    sector: number;
}

