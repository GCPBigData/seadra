  export class Brokerage {
    id: number;
    name: string;
    cnpj: string;
    address: string;
    addressNeighborhood: string;
    addressCity: string;
    addressState: string;
    swingTrade: number;
    dayTrade: number;
    loginEmail: boolean;
    loginAccessCode: boolean;
    loginCpf: boolean;
    loginPassword: boolean;
    loginToken: boolean;
    iss: number;
    phone: string;
    website: string;
    email: string;
    logo: string;
    status: string;
    tipo: String;
 }

  export interface RequestCreateBrokerage {
    name: string;
    cnpj: string;
    address: string;
    addressNeighborhood: string;
    addressCity: string;
    addressState: string;
    dayTrade: string;
    swingTrade: string;
    iss: string;
    loginEmail: boolean;
    loginAccessCode: boolean;
    loginCpf: boolean;
    loginPassword: boolean;
    loginToken: boolean;
    status: string;
    tipo: string;
    phone: string;
    website: string;
    email: string;
    logo: string;
  }


