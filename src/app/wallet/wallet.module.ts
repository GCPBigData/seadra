import DateTimeFormat = Intl.DateTimeFormat;

export class Wallet {
    id: number;
    modality: string;
    amount: string;
    situation: string;
    purchaseData: String;
    saleDate: String;
    actionValueDay: string;
    priceAction: string;
    brokerage: [];
    action: [];
    userEntity: [];
}

export interface RequestCreateWallet {
    modality: string;
    amount: string;
    situation: string;
    purchaseData: String;
    saleDate: String;
    actionValueDay: string;
    priceAction: string;
    brokerage: [];
    action: [];
    userEntity: [];
}
